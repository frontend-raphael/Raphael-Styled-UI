import { defaultPalette } from "@/resources";
import { CommonInputAttributes, RaphaelColor, RaphaelSize } from "@/types";
import { propsMapper } from "@/utils";
import { useState } from "react";
import styled from "styled-components";

interface SliderAttributes extends CommonInputAttributes<number> {
  min: number;
  max: number;
  step?: number | "";
  $sliderBackgroundColor?: RaphaelColor;
  $thumbSize?: RaphaelSize;
  $thumbSrc?: RaphaelColor;
}

interface SliderProps extends SliderAttributes {
  setOnChangeListener: (value: number) => void;
}

const defaultProps: SliderProps = {
  value: 0,
  disabled: false,
  min: 0,
  max: 100,
  step: "",
  $inputWidth: "100%",
  $inputHeight: "fit-content",
  $inputBorderRadius: "10px",
  $sliderBackgroundColor: defaultPalette.lightPrimaryColor,
  $thumbSize: "24px",
  $thumbSrc: defaultPalette.subColor,
  setOnChangeListener: (value: number) => {},
  className: "",
};

const Slider = (props: SliderProps) => {
  const { value, setOnChangeListener, ...etcProps } = propsMapper<
    SliderProps,
    SliderProps
  >(defaultProps, props);
  const [sliderValue, setSliderValue] = useState(value);

  return (
    <StyledSlider
      type="range"
      {...etcProps}
      value={sliderValue}
      onChange={(e) => {
        setOnChangeListener(Number(e.target.value));
        setSliderValue(Number(e.target.value));
      }}
    />
  );
};

export type { SliderAttributes };
export default Slider;

const StyledSlider = styled.input<SliderAttributes>`
  width: ${(props) => props.$inputWidth};
  height: ${(props) => props.$inputHeight};
  border-radius: ${(props) => props.$inputBorderRadius};
  background: ${(props) => props.$sliderBackgroundColor};
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${(props) => props.$thumbSize};
    height: ${(props) => props.$thumbSize};
    border-radius: 50%;
    background: ${(props) => props.$thumbSrc};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: ${(props) => props.$thumbSize};
    height: ${(props) => props.$thumbSize};
    border-radius: 50%;
    background: ${(props) => props.$thumbSrc};
    cursor: pointer;
  }
`;

export { StyledSlider };
