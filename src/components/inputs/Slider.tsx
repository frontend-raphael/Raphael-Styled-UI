import { defaultPalette } from "@/resources";
import { CommonInputAttributes, RaphaelColor, RaphaelSize } from "@/types";
import { propsMapper } from "@/utils";
import styled from "styled-components";

interface SliderAttributes extends CommonInputAttributes<number> {
  min: number;
  max: number;
  step?: number | "";
  $sliderBackgroundColor?: RaphaelColor;
  $thumbSize?: RaphaelSize;
  $thumbSrc?: RaphaelColor;
}

const defaultProps: SliderAttributes = {
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  className: "",
};

const Slider = (props: SliderAttributes) => {
  const allProps = propsMapper<SliderAttributes, SliderAttributes>(
    defaultProps,
    props
  );

  return <StyledSlider type="range" {...allProps} />;
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
