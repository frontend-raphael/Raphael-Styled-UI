import { RaphaelSize } from "@/types/css";
import { CommonComponentProps } from "..";

interface CommonImageAttributes extends CommonComponentProps {
  $imageWidth?: RaphaelSize;
  $imageHeight?: RaphaelSize;
  $imageBorderRadius?: RaphaelSize;
}

export type { CommonImageAttributes };
