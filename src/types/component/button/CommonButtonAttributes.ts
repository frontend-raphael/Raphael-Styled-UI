import { RaphaelColor } from "@/types/css/Color";
import { RaphaelSize } from "@/types/css/Size";
import { CommonComponentProps } from "../CommonComponentProps";

interface CommonButtonAttributes extends CommonComponentProps {
  $width?: RaphaelSize;
  $height?: RaphaelSize;
  $padding?: RaphaelSize;
  $fontSize?: RaphaelSize;
  $fontWeight?: number;
  $backgroundColor?: RaphaelColor;
  $color?: RaphaelColor;
  $hoverBackgroundColor?: RaphaelColor;
  $hoverColor?: RaphaelColor;
  $borderRadius?: RaphaelSize;
  $onClick?: () => void;
}

interface CommonButtonProps extends CommonButtonAttributes {
  label: string;
  isEnabled?: boolean;
}

export type { CommonButtonAttributes, CommonButtonProps };
