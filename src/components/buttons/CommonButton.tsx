import styled from "styled-components";
import { defaultPalette } from "@/resources";
import { ButtonAttributes } from "@/types/component/button";
import { propsMapper } from "@/utils";

interface ButtonProps extends ButtonAttributes {
  buttonLabel: string;
}

const defaultProps: ButtonProps = {
  buttonLabel: "",
  disabled: false,
  $buttonWidth: "fit-content",
  $buttonHeight: "fit-content",
  $buttonPadding: "10px",
  $buttonFontSize: "16px",
  $buttonFontWeight: 400,
  $buttonBackgroundColor: defaultPalette.primaryColor,
  $buttonColor: defaultPalette.mainFontColor,
  $buttonHoverBackgroundColor: defaultPalette.lightPrimaryColor,
  $buttonHoverColor: defaultPalette.mainFontColor,
  $buttonBorderRadius: "10px",
  onClick: () => {},
  className: "",
};

const CommonButton = (props: ButtonProps) => {
  const { buttonLabel, ...etcProps } = propsMapper<ButtonProps, ButtonProps>(
    defaultProps,
    props
  );

  return <StyledCommonButton {...etcProps}>{buttonLabel}</StyledCommonButton>;
};

export type { ButtonProps };
export default CommonButton;

const StyledCommonButton = styled.button<ButtonAttributes>`
  width: ${(props) => props.$buttonWidth};
  height: ${(props) => props.$buttonHeight};
  padding: ${(props) => props.$buttonPadding};
  font-size: ${(props) => props.$buttonFontSize};
  font-weight: ${(props) => props.$buttonFontWeight};
  background-color: ${(props) => props.$buttonBackgroundColor};
  color: ${(props) => props.$buttonColor};
  border-radius: ${(props) => props.$buttonBorderRadius};
  cursor: pointer;
  box-sizing: border-box;
  border: none;

  &:hover {
    background-color: ${(props) => props.$buttonHoverBackgroundColor};
    color: ${(props) => props.$buttonHoverColor};
  }

  &:disabled {
    background-color: ${defaultPalette.disable};
    color: ${defaultPalette.subFontColor};
    cursor: none;
  }
`;

export { StyledCommonButton };
