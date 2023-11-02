import { RaphaelColor, RaphaelSize } from "@/types/css";
import { CommonComponentProps } from "..";

interface CommonButtonAttributes extends CommonComponentProps {
  $buttonWidth?: RaphaelSize;
  $buttonHeight?: RaphaelSize;
  $buttonPadding?: RaphaelSize;
  $buttonFontSize?: RaphaelSize;
  $buttonFontWeight?: number;
  $buttonBackgroundColor?: RaphaelColor;
  $buttonColor?: RaphaelColor;
  $buttonHoverBackgroundColor?: RaphaelColor;
  $buttonHoverColor?: RaphaelColor;
  $buttonBorderRadius?: RaphaelSize;
  onClick?: () => void;
}

interface CommonButtonProps extends CommonButtonAttributes {
  buttonLabel: string;
  isButtonDisabled?: boolean;
}

export type { CommonButtonAttributes, CommonButtonProps };
