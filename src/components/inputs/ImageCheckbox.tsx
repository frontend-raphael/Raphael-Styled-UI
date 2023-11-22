import styled from "styled-components";
import { CommonInputAttributes, RaphaelSize } from "@/types";
import { propsMapper } from "@/utils";
import React, { useState } from "react";

interface ImageCheckboxAttributes
  extends Pick<
    CommonInputAttributes<string>,
    "className" | "disabled" | "value"
  > {
  $imageCheckboxSize?: RaphaelSize;
}

interface ImageCheckboxProps extends ImageCheckboxAttributes {
  checked?: boolean;
  $checkedImg: string;
  $uncheckedImg: string;
  $disabledImg?: string;
  setOnCheckListener: (value: string, checked: boolean) => void;
}

const defaultImageCheckbox: ImageCheckboxProps = {
  value: "",
  disabled: false,
  checked: false,
  $checkedImg: "",
  $uncheckedImg: "",
  $disabledImg: "",
  $imageCheckboxSize: "20px",
  setOnCheckListener: (value: string, checked: boolean) => {},
  className: "",
};

const ImageCheckbox = (props: ImageCheckboxProps) => {
  const {
    className,
    $imageCheckboxSize,
    value,
    checked,
    setOnCheckListener,
    ...etcProps
  } = propsMapper<ImageCheckboxProps, ImageCheckboxProps>(
    defaultImageCheckbox,
    props
  );
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <StyledImageCheckboxWrapper className={className}>
      <StyledImageCheckboxInput
        {...etcProps}
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={() => {
          setOnCheckListener(value, !isChecked);
          setIsChecked(!isChecked);
        }}
      />
      <StyledImageCheckboxImg $imageCheckboxSize={$imageCheckboxSize} />
    </StyledImageCheckboxWrapper>
  );
};

export type { ImageCheckboxAttributes, ImageCheckboxProps };
export default ImageCheckbox;

const StyledImageCheckboxWrapper = styled.label`
  position: relative;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

const StyledImageCheckboxInput = styled.input<ImageCheckboxProps>`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + img {
    content: url(${(props) => props.$checkedImg});
  }

  &:not(:checked) + img {
    content: url(${(props) => props.$uncheckedImg});
  }

  &:disabled + img {
    content: url(${(props) => props.$disabledImg});
  }
`;

const StyledImageCheckboxImg = styled.img<{
  $imageCheckboxSize: RaphaelSize;
}>`
  width: ${(props) => props.$imageCheckboxSize};
  height: ${(props) => props.$imageCheckboxSize};
`;

export {
  StyledImageCheckboxWrapper,
  StyledImageCheckboxInput,
  StyledImageCheckboxImg,
};
