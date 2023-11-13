import { defaultPalette } from "@/resources";
import { CommonInputAttributes, RaphaelColor, RaphaelSize } from "@/types";
import { propsMapper } from "@/utils";
import styled from "styled-components";

interface CheckboxAttributes extends CommonInputAttributes<string> {
  $uncheckedBackgroundColor?: RaphaelColor;
  $checkedBackgroundColor?: RaphaelColor;
  $markerColor?: RaphaelColor;
  $markerWidth?: RaphaelSize;
}
interface CheckboxProps extends CheckboxAttributes {
  checked: boolean;
}

const defaultProps: CheckboxProps = {
  value: "",
  checked: false,
  disabled: false,
  $inputBorderRadius: "4px",
  $inputWidth: "20px",
  $inputHeight: "20px",
  $checkedBackgroundColor: defaultPalette.lightPrimaryColor,
  $uncheckedBackgroundColor: defaultPalette.lightPrimaryColor,
  $markerColor: defaultPalette.subColor,
  $markerWidth: "2px",
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  className: "",
};

const Checkbox = (props: CheckboxProps) => {
  const { className, onChange, value, disabled, ...etcProps } = propsMapper<
    CheckboxProps,
    CheckboxProps
  >(defaultProps, props);

  return (
    <StyledCheckboxWrapper>
      <StyledCheckboxInput
        onChange={onChange}
        className={className}
        value={value}
        disabled={disabled}
        type="checkbox"
        {...etcProps}
      />
      <StyledCheckboxBackground {...etcProps}>
        <StyledCheckboxMarker {...etcProps} />
      </StyledCheckboxBackground>
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

const StyledCheckboxInput = styled.input<CheckboxAttributes>`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + div {
    background-color: ${(props) => props.$checkedBackgroundColor};
  }

  &:checked + div div {
    display: block;
  }
`;

const StyledCheckboxBackground = styled.div<CheckboxAttributes>`
  position: relative;
  width: ${(props) => props.$inputWidth};
  height: ${(props) => props.$inputHeight};
  border-radius: ${(props) => props.$inputBorderRadius};
  background-color: ${(props) => props.$uncheckedBackgroundColor};
  border: solid 1px ${defaultPalette.borderColor};
`;

const StyledCheckboxMarker = styled.div<CheckboxAttributes>`
  position: absolute;
  left: 30%;
  top: 10%;
  display: none;
  width: 25%;
  height: 50%;
  border: solid ${(props) => props.$markerColor};
  border-width: ${(props) => `0 ${props.$markerWidth} ${props.$markerWidth} 0`};
  transform: rotate(45deg);
`;

export { StyledCheckboxInput, StyledCheckboxBackground, StyledCheckboxMarker };
