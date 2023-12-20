/*
1. swipe
2. control
3. auto
4. indicator
5. infinite
6. centerFocus
7. slide
8. orientation
*/

import { defaultPalette } from "@/resources";
import { CommonLayoutAttributes, RaphaelColor, RaphaelSize } from "@/types";
import { debounce, throttle } from "lodash";
import React, {
  FC,
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
  const [isTransitionStop, setIsTransitionStop] = useState(false);
  const isMouseMove = useRef<Boolean>(false);
  const mouseDownXPos = useRef<number>(0);

  const checkEndMouseMoveEvent = (e: React.MouseEvent) => {
    if (ref.current) {
      const movementX = mouseDownXPos.current - e.clientX;
      const containerWidth = ref.current.getBoundingClientRect().width;
      const normalizedMoveValue = movementX / containerWidth;

      if (normalizedMoveValue > 0.3) {
        setCurrentIdx(currentIdx + 1);
      } else if (normalizedMoveValue < -0.3) {
        setCurrentIdx(currentIdx - 1);
      }
    }

    isMouseMove.current = false;
    setMoveValue(0);
    setIsTransitionStop(false);
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

    setMoveValue(normalizedMoveValue);
  }, 200);

  const setOnMouseUp = (e: React.MouseEvent) => {
    checkEndMouseMoveEvent(e);
  };

  const setOnContextMenu = (e: React.MouseEvent) => {
    isMouseMove.current = false;
  };

  return (
    <CarouselContext.Provider
      value={{
        currentIdx,
        setCurrentIdx,
        itemCount,
        isSwipe,
        isControlVisible,
        isAuto,
        isIndicatorVisible,
        isInfinite,
        isSlide,
        isHoverStop,
        moveValue,
        setMoveValue,
        isTransitionStop,
        setIsTransitionStop,
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
        {children}
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
  return (
    <StyledCarouselIndicatorWrapper className={props.className}>
      {props.children}
    </StyledCarouselIndicatorWrapper>
  );
};

const CarouselIndicatorItem = (props: CarouselIndicatorItemAttributes) => {
  const { setCurrentIdx } = useContext(CarouselContext)!;

  const setOnClickListener = () => {
    setCurrentIdx(props.itemIdx);
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
  const { currentIdx, setCurrentIdx } = useContext(CarouselContext)!;

  const setOnClickListener = () => {
    setCurrentIdx(currentIdx + 1);
  };

  return (
    <StyledCarouselRightControl
      className={props.className}
      onClick={setOnClickListener}
    >
      {props.children}
    </StyledCarouselRightControl>
  );
};

const CarouselLeftControl = (props: CarouselLeftControlAttributes) => {
  const { currentIdx, setCurrentIdx } = useContext(CarouselContext)!;

  const setOnClickListener = () => {
    setCurrentIdx(currentIdx - 1);
  };

  return (
    <StyledCarouselLeftControl
      className={props.className}
      onClick={setOnClickListener}
    >
      {props.children}
    </StyledCarouselLeftControl>
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
