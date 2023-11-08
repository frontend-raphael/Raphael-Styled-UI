import styled from "styled-components";
import { CommonInputAttributes, RaphaelSize } from "@/types";
import { propsMapper } from "@/utils";
import React from "react";

interface CheckboxAttributes
  extends Pick<
    CommonInputAttributes<string>,
    "className" | "disabled" | "value" | "onChange"
  > {
  $checkboxSize?: RaphaelSize;
}

interface CheckboxProps extends CheckboxAttributes {
  checked: boolean;
  $checkedImg: string;
  $uncheckedImg: string;
  $disabledImg?: string;
}

const defaultCheckbox: CheckboxProps = {
  value: "",
  disabled: false,
  checked: false,
  $checkedImg: "",
  $uncheckedImg: "",
  $disabledImg: "",
  $checkboxSize: "24px",
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  className: "",
};

const Checkbox = (props: CheckboxProps) => {
  const { className, $checkboxSize, ...etcProps } = propsMapper<
    CheckboxProps,
    CheckboxProps
  >(defaultCheckbox, props);

  return (
    <StyledCheckboxWrapper className={className}>
      <StyledCheckboxInput {...etcProps} type="checkbox" />
      <StyledCheckboxImg $checkboxSize={$checkboxSize} />
    </StyledCheckboxWrapper>
  );
};

export type { CheckboxAttributes, CheckboxProps };
export default Checkbox;

const StyledCheckboxWrapper = styled.label`
  position: relative;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCheckboxInput = styled.input<CheckboxProps>`
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

const StyledCheckboxImg = styled.img<{
  $checkboxSize: RaphaelSize;
}>`
  width: ${(props) => props.$checkboxSize};
  height: ${(props) => props.$checkboxSize};
`;

export { StyledCheckboxWrapper, StyledCheckboxInput, StyledCheckboxImg };
