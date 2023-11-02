import { RaphaelSize } from "@/types/css";
import { CommonComponentProps } from "..";

interface CommonImageAttributes extends CommonComponentProps {
  $imageWidth?: RaphaelSize;
  $imageHeight?: RaphaelSize;
  $imageBorderRadius?: RaphaelSize;
}

interface CommonImageProps extends CommonImageAttributes {
  src: string;
}

export type { CommonImageAttributes, CommonImageProps };
