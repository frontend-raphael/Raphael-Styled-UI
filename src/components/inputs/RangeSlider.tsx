import { defaultPalette } from "@/resources";
import { CommonInputAttributes, RaphaelColor, RaphaelSize } from "@/types";
import { propsMapper } from "@/utils";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface RangeSliderAttributes
  extends Pick<
    CommonInputAttributes<number>,
    | "$inputWidth"
    | "$inputHeight"
    | "$inputBorderRadius"
    | "className"
    | "disabled"
  > {
  $sliderBackgroundColor?: RaphaelColor;
  $thumbSize?: RaphaelSize;
  $thumbSrc?: RaphaelColor;
}

interface RangeSliderProps extends RangeSliderAttributes {
  minValue: number;
  maxValue: number;
  onValueChange: (minValue: number, maxValue: number) => void;
}

const defaultProps: RangeSliderProps = {
  minValue: 0,
  maxValue: 100,
  disabled: false,
  $inputWidth: "100%",
  $inputHeight: "20px",
  $inputBorderRadius: "10px",
  $sliderBackgroundColor: defaultPalette.lightPrimaryColor,
  $thumbSize: "20px",
  $thumbSrc: defaultPalette.subColor,
  onValueChange: (minValue: number, maxValue: number) => {},
  className: "",
};

const RangeSlider = (props: RangeSliderProps) => {
  const { minValue, maxValue, onValueChange, className, ...etcProps } =
    propsMapper<RangeSliderProps, RangeSliderProps>(defaultProps, props);
  const [isMinThumbMouseDown, setIsMinThumbMouseDown] = useState(false);
  const [minPos, setMinPos] = useState([0, 0]);
  const [isMaxThumbMouseDown, setIsMaxThumbMouseDown] = useState(false);
  const [maxPos, setMaxPos] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>();
  const thumbRef = useRef<HTMLDivElement>();
  const valueRef = useRef<[number, number]>([minValue, maxValue]);

  const range = maxValue - minValue;

  const calculateValue = (
    currenValue: number,
    inputWidth: number,
    thumbWidth: number
  ) => {
    return (currenValue / (inputWidth - thumbWidth)) * range;
  };

  const getThumbValue = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => {
    if (!(ref.current && thumbRef.current)) {
      return;
    }

    let value =
      e.clientX -
      ref.current.getBoundingClientRect().left -
      thumbRef.current.clientWidth / 2;

    if (value < 0) {
      value = 0;
    } else if (value > ref.current.clientWidth - thumbRef.current.clientWidth) {
      value = ref.current.clientWidth - thumbRef.current.clientWidth;
    }

    return value;
  };

  const handleLeftThumb = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => {
    if (!(ref.current && thumbRef.current)) {
      return;
    }

    const value = getThumbValue(e)!;

    if (value < maxPos[0] - thumbRef.current.clientWidth) {
      valueRef.current = [
        calculateValue(
          value,
          ref.current.clientWidth,
          thumbRef.current.clientWidth
        ),
        valueRef.current[1],
      ];

      setMinPos([
        value,
        (ref.current.clientHeight - thumbRef.current.clientHeight) / 2,
      ]);
    }
  };

  const handleRightThumb = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => {
    if (!(ref.current && thumbRef.current)) {
      return;
    }

    const value = getThumbValue(e)!;

    if (value > minPos[0] + thumbRef.current.clientWidth) {
      valueRef.current = [
        valueRef.current[0],
        calculateValue(
          value,
          ref.current.clientWidth,
          thumbRef.current.clientWidth
        ),
      ];

      setMaxPos([
        value,
        (ref.current.clientHeight - thumbRef.current.clientHeight) / 2,
      ]);
    }
  };

  useEffect(() => {
    if (ref.current && thumbRef.current) {
      setMinPos([
        0,
        (ref.current.clientHeight - thumbRef.current.clientHeight) / 2,
      ]);
    }

    if (ref.current && thumbRef.current) {
      setMaxPos([
        ref.current.clientWidth - thumbRef.current.clientWidth,
        (ref.current.clientHeight - thumbRef.current.clientHeight) / 2,
      ]);
    }

    onValueChange(minValue, maxValue);
  }, []);

  useEffect(() => {
    onValueChange(valueRef.current[0], valueRef.current[1]);
  }, [minPos, maxPos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMinThumbMouseDown) {
        handleLeftThumb(e);
      } else if (isMaxThumbMouseDown) {
        handleRightThumb(e);
      }
    };

    const handleMouseUp = () => {
      setIsMinThumbMouseDown(false);
      setIsMaxThumbMouseDown(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMinThumbMouseDown, isMaxThumbMouseDown]);

  return (
    <StyledRangeSliderWrapper
      ref={ref}
      className={className}
      {...etcProps}
      onClick={(e) => {
        if (Math.abs(e.clientX - minPos[0]) < Math.abs(e.clientX - maxPos[0])) {
          handleLeftThumb(e);
        } else {
          handleRightThumb(e);
        }
      }}
    >
      <StyledRangeSliderThumb
        {...etcProps}
        ref={thumbRef}
        $pos={minPos}
        onMouseDown={() => {
          setIsMinThumbMouseDown(true);
        }}
      />

      <StyledRangeSliderThumb
        {...etcProps}
        ref={thumbRef}
        $pos={maxPos}
        onMouseDown={() => {
          setIsMaxThumbMouseDown(true);
        }}
      />
    </StyledRangeSliderWrapper>
  );
};

export type { RangeSliderAttributes, RangeSliderProps };
export default RangeSlider;

const StyledRangeSliderWrapper = styled.div<RangeSliderAttributes>`
  position: relative;
  width: ${(props) => props.$inputWidth};
  height: ${(props) => props.$inputHeight};
  border-radius: ${(props) => props.$inputBorderRadius};
  background-color: ${(props) => props.$sliderBackgroundColor};
  box-sizing: border-box;
  border: 2px solid ${defaultPalette.borderColor};
`;

const StyledRangeSliderThumb = styled.div<{
  $pos: [number, number];
  $thumbSize?: RaphaelSize;
  $thumbSrc?: RaphaelColor;
}>`
  position: absolute;
  display: inline-block;
  width: ${(props) => props.$thumbSize};
  height: ${(props) => props.$thumbSize};
  border-radius: 50%;
  background-color: ${(props) => props.$thumbSrc};
  left: ${(props) => `${props.$pos[0]}px`};
  top: ${(props) => `${props.$pos[1]}px`};

  &:hover {
    cursor: pointer;
  }
`;

export { StyledRangeSliderWrapper, StyledRangeSliderThumb };
