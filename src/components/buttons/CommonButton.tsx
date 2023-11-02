import { defaultPalette } from "@/resources";
import {
  CommonButtonAttributes,
  CommonButtonProps,
} from "@/types/component/button";
import styled from "styled-components";

const CommonButton = ({
  buttonLabel = "",
  isButtonDisabled = false,
  $buttonWidth = "fit-content",
  $buttonHeight = "fit-content",
  $buttonPadding = "10px",
  $buttonFontSize = "16px",
  $buttonFontWeight = 400,
  $buttonBackgroundColor = defaultPalette.primaryColor,
  $buttonColor = defaultPalette.mainFontColor,
  $buttonHoverBackgroundColor = defaultPalette.lightPrimaryColor,
  $buttonHoverColor = defaultPalette.mainFontColor,
  $buttonBorderRadius = "10px",
  onClick = () => {},
  className = "",
}: CommonButtonProps) => {
  return (
    <StyledCommonButton
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
      $buttonPadding={$buttonPadding}
      $buttonFontSize={$buttonFontSize}
      $buttonFontWeight={$buttonFontWeight}
      $buttonBackgroundColor={$buttonBackgroundColor}
      $buttonColor={$buttonColor}
      $buttonHoverBackgroundColor={$buttonHoverBackgroundColor}
      $buttonHoverColor={$buttonHoverColor}
      $buttonBorderRadius={$buttonBorderRadius}
      onClick={onClick}
      disabled={isButtonDisabled}
      className={className}
    >
      {buttonLabel}
    </StyledCommonButton>
  );
};

export default CommonButton;

const StyledCommonButton = styled.button<CommonButtonAttributes>`
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
