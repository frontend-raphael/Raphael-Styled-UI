/*
1. swipe
2. control
3. auto
4. indicator
5. infinite
6. centerFocus
7. slide
*/

import { defaultPalette } from "@/resources";
import { CommonLayoutAttributes, RaphaelColor, RaphaelSize } from "@/types";
import { throttle } from "lodash";
import React, {
  FC,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface CarouselAttributes extends CommonLayoutAttributes {
  width?: RaphaelSize;
  height?: RaphaelSize;
  $backgroundColor?: RaphaelColor;
}

interface CarouselProps extends CarouselAttributes {
  itemCount: number;
  startIdx?: number;
  isSwipe?: boolean;
  isControlVisible?: boolean;
  isAuto?: boolean;
  isIndicatorVisible?: boolean;
  isInfinite?: boolean;
  isSlide?: boolean;
  isHoverStop?: boolean;
}

interface CarouselItemAttributes extends CommonLayoutAttributes {
  itemIdx: number;
}

interface CarouselIndicatorAttributes extends CommonLayoutAttributes {}

interface CarouselIndicatorItemAttributes extends CommonLayoutAttributes {
  itemIdx: number;
}

interface CarouselRightControlAttributes extends CommonLayoutAttributes {}

interface CarouselLeftControlAttributes extends CommonLayoutAttributes {}

interface CarouselComponent extends FC<CarouselProps> {
  Item: FC<CarouselItemAttributes>;
  Indicator: FC<CarouselIndicatorAttributes>;
  IndicatorItem: FC<CarouselIndicatorItemAttributes>;
  RightControl: FC<CarouselRightControlAttributes>;
  LeftControl: FC<CarouselLeftControlAttributes>;
}

interface CarouselContextProps {
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
  itemCount: number;
  isSwipe: boolean;
  isControlVisible: boolean;
  isAuto: boolean;
  isIndicatorVisible: boolean;
  isInfinite: boolean;
  isSlide: boolean;
  isHoverStop: boolean;
  moveValue: number;
  setMoveValue: React.Dispatch<React.SetStateAction<number>>;
  isTransitionStop: boolean;
  setIsTransitionStop: React.Dispatch<React.SetStateAction<boolean>>;
  nextItem: () => void;
  prevItem: () => void;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const Carousel: CarouselComponent = ({
  itemCount = 0,
  startIdx = 0,
  isSwipe = true,
  isControlVisible = false,
  isAuto = false,
  isIndicatorVisible = false,
  isInfinite = false,
  isSlide = false,
  isHoverStop = false,
  width = "100%",
  height = "100%",
  $backgroundColor = defaultPalette.primaryColor,
  children = <></>,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(startIdx!);
  const [moveValue, setMoveValue] = useState(0);
  const [isTransitionStop, setIsTransitionStop] = useState(true);
  const isMouseMove = useRef<Boolean>(false);
  const mouseDownXPos = useRef<number>(0);
  const stopMouseMoveX = useRef<boolean>(false);

  const getCarouselItemChildren = () => {
    return React.Children.toArray(children).filter((child) => {
      if (
        React.isValidElement(child) &&
        child.type.valueOf().hasOwnProperty("displayName")
      ) {
        return (child.type as any).displayName === "CarouselItem";
      }
      return false;
    });
  };

  const getCarouselOtherChildren = () => {
    return React.Children.toArray(children).filter((child) => {
      if (
        React.isValidElement(child) &&
        child.type.valueOf().hasOwnProperty("displayName")
      ) {
        return (child.type as any).displayName !== "CarouselItem";
      }
      return false;
    });
  };

  const getInfiniteChildren = () => {
    const itemChildren = getCarouselItemChildren();
    const startChild = itemChildren[0];
    const endChild = itemChildren[itemCount - 1];
    const newChildren = [
      endChild,
      ...itemChildren,
      startChild,
      ...getCarouselOtherChildren(),
    ];

    return newChildren.map((value, index) => {
      return cloneElement(value as any, {
        key: index,
      });
    });
  };

  const generateCarouselState = () => {
    const state = {
      isSwipe: isSwipe,
      isAuto: isAuto,
      isInfinite: isInfinite,
      isSlide: isSlide,
    };

    if (isSlide) {
      state.isSwipe = false;
      state.isAuto = false;
    }

    return state;
  };

  const carouselState = generateCarouselState();

  const nextItem = () => {
    if (carouselState.isInfinite) {
      setCurrentIdx(currentIdx + 1);

      if (currentIdx === itemCount) {
        setTimeout(() => {
          setIsTransitionStop(true);
          setCurrentIdx(1);
        }, 500);
      }
    } else {
      setCurrentIdx((currentIdx + 1) % itemCount);
    }
  };

  const prevItem = () => {
    if (carouselState.isInfinite) {
      setCurrentIdx(currentIdx - 1);

      if (currentIdx === 1) {
        setTimeout(() => {
          setIsTransitionStop(true);
          setCurrentIdx(itemCount);
        }, 500);
      }
    } else {
      setCurrentIdx((currentIdx - 1 + itemCount) % itemCount);
    }
  };

  const checkEndMouseMoveEvent = (e: React.MouseEvent) => {
    isMouseMove.current = false;
    setMoveValue(0);
    setIsTransitionStop(false);
    if (stopMouseMoveX.current) {
      stopMouseMoveX.current = false;
      return;
    }

    if (ref.current) {
      const movementX = mouseDownXPos.current - e.clientX;
      const containerWidth = ref.current.getBoundingClientRect().width;
      const normalizedMoveValue = movementX / containerWidth;

      if (normalizedMoveValue > 0.1) {
        nextItem();
      } else if (normalizedMoveValue < -0.1) {
        prevItem();
      }
    }
  };

  const setOnMouseDown = (e: React.MouseEvent) => {
    if (isSwipe) {
      mouseDownXPos.current = e.clientX;
      isMouseMove.current = true;
    }
  };

  const setOnMouseMove = throttle((e: React.MouseEvent) => {
    if (!ref.current || !isMouseMove.current) {
      return;
    }

    setIsTransitionStop(true);

    const movementX = mouseDownXPos.current - e.clientX;
    const containerWidth = ref.current.getBoundingClientRect().width;
    const normalizedMoveValue = movementX / containerWidth;

    if (!carouselState.isInfinite) {
      if (currentIdx === 0 && normalizedMoveValue < 0) {
        stopMouseMoveX.current = true;
        return;
      } else if (currentIdx === itemCount - 1 && normalizedMoveValue > 0) {
        stopMouseMoveX.current = true;
        return;
      }
    }

    setMoveValue(normalizedMoveValue);
  }, 200);

  const setOnMouseUp = (e: React.MouseEvent) => {
    checkEndMouseMoveEvent(e);
  };

  const setOnContextMenu = (e: React.MouseEvent) => {
    isMouseMove.current = false;
  };

  useEffect(() => {
    let autoInterval: NodeJS.Timeout;
    if (carouselState.isAuto) {
      autoInterval = setInterval(nextItem, 3000);
    }

    return () => {
      if (carouselState.isAuto) {
        clearInterval(autoInterval);
      }
    };
  }, [currentIdx]);

  useEffect(() => {
    if (carouselState.isInfinite) {
      setCurrentIdx(1);
    }
  }, []);

  return (
    <CarouselContext.Provider
      value={{
        currentIdx,
        setCurrentIdx,
        itemCount,
        isSwipe: carouselState.isSwipe,
        isControlVisible,
        isAuto: carouselState.isAuto,
        isIndicatorVisible,
        isInfinite: carouselState.isInfinite,
        isSlide: carouselState.isSlide,
        isHoverStop,
        moveValue,
        setMoveValue,
        isTransitionStop,
        setIsTransitionStop,
        nextItem,
        prevItem,
      }}
    >
      <StyledCarouselWrapper
        ref={ref}
        width={width}
        height={height}
        $backgroundColor={$backgroundColor}
        className={className}
        onMouseDown={setOnMouseDown}
        onMouseMove={(e) => {
          setOnMouseMove(e);
        }}
        onMouseUp={setOnMouseUp}
        onContextMenu={setOnContextMenu}
        onDragStart={(e) => {
          // macOS drag and drop block
          e.preventDefault();
        }}
      >
        {carouselState.isInfinite ? getInfiniteChildren() : children}
      </StyledCarouselWrapper>
    </CarouselContext.Provider>
  );
};

const CarouselItem = (props: CarouselItemAttributes) => {
  const { currentIdx, moveValue, isTransitionStop } =
    useContext(CarouselContext)!;

  return (
    <StyledCarouselItem
      className={props.className}
      $currentIdx={currentIdx + moveValue}
      $isTransitionStop={isTransitionStop}
    >
      {props.children}
    </StyledCarouselItem>
  );
};

const CarouselIndicator = (props: CarouselIndicatorAttributes) => {
  const { isIndicatorVisible } = useContext(CarouselContext)!;
  return (
    <>
      {isIndicatorVisible && (
        <StyledCarouselIndicatorWrapper className={props.className}>
          {props.children}
        </StyledCarouselIndicatorWrapper>
      )}
    </>
  );
};

const CarouselIndicatorItem = (props: CarouselIndicatorItemAttributes) => {
  const { setCurrentIdx, isInfinite } = useContext(CarouselContext)!;

  const setOnClickListener = () => {
    if (isInfinite) {
      setCurrentIdx(props.itemIdx + 1);
    } else {
      setCurrentIdx(props.itemIdx);
    }
  };

  return (
    <StyledCarouselIndicatorItem
      className={props.className}
      onClick={setOnClickListener}
    >
      {props.children}
    </StyledCarouselIndicatorItem>
  );
};

const CarouselRightControl = (props: CarouselRightControlAttributes) => {
  const { isControlVisible, nextItem } = useContext(CarouselContext)!;

  return (
    <>
      {isControlVisible && (
        <StyledCarouselRightControl
          className={props.className}
          onClick={nextItem}
        >
          {props.children}
        </StyledCarouselRightControl>
      )}
    </>
  );
};

const CarouselLeftControl = (props: CarouselLeftControlAttributes) => {
  const { isControlVisible, prevItem } = useContext(CarouselContext)!;

  return (
    <>
      {isControlVisible && (
        <StyledCarouselLeftControl
          className={props.className}
          onClick={prevItem}
        >
          {props.children}
        </StyledCarouselLeftControl>
      )}
    </>
  );
};

Carousel.Item = CarouselItem;
Carousel.Indicator = CarouselIndicator;
Carousel.IndicatorItem = CarouselIndicatorItem;
Carousel.RightControl = CarouselRightControl;
Carousel.LeftControl = CarouselLeftControl;

export type {
  CarouselAttributes,
  CarouselProps,
  CarouselItemAttributes,
  CarouselIndicatorAttributes,
  CarouselIndicatorItemAttributes,
  CarouselRightControlAttributes,
  CarouselLeftControlAttributes,
};

export {
  Carousel,
  CarouselItem,
  CarouselIndicator,
  CarouselIndicatorItem,
  CarouselRightControl,
  CarouselLeftControl,
};

const StyledCarouselWrapper = styled.div<CarouselAttributes>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledCarouselItem = styled.div<{
  $currentIdx: number;
  $isTransitionStop: boolean;
}>`
  width: 100%;
  height: 100%;
  transition: transform
    ${({ $isTransitionStop }) => ($isTransitionStop ? 0 : 0.5)}s ease-in-out;
  transform: translate(${({ $currentIdx }) => -$currentIdx * 100}%);
`;

const StyledCarouselIndicatorWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const StyledCarouselIndicatorItem = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledCarouselRightControl = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: fit-content;
  height: fit-content;
`;

const StyledCarouselLeftControl = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: fit-content;
  height: fit-content;
`;

export {
  StyledCarouselWrapper,
  StyledCarouselItem,
  StyledCarouselIndicatorWrapper,
  StyledCarouselIndicatorItem,
  StyledCarouselRightControl,
  StyledCarouselLeftControl,
};
