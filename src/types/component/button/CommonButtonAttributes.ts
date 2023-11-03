import { RaphaelColor, RaphaelSize } from "@/types/css";
import { CommonComponentProps } from "..";

interface CommonButtonAttributes extends CommonComponentProps {
  $buttonWidth?: RaphaelSize;
  $buttonHeight?: RaphaelSize;
  $buttonPadding?: RaphaelSize;
  $buttonBorderRadius?: RaphaelSize;
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAttributes extends CommonButtonAttributes {
  $buttonFontSize?: RaphaelSize;
  $buttonFontWeight?: number;
  $buttonBackgroundColor?: RaphaelColor;
  $buttonColor?: RaphaelColor;
  $buttonHoverBackgroundColor?: RaphaelColor;
  $buttonHoverColor?: RaphaelColor;
}

export type { CommonButtonAttributes, ButtonAttributes };
