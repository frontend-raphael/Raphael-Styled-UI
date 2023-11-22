import { RaphaelSize } from "@/types/css";
import { CommonComponentAttributes } from "..";

interface CommonImageAttributes extends CommonComponentAttributes {
  $imageWidth?: RaphaelSize;
  $imageHeight?: RaphaelSize;
  $imageBorderRadius?: RaphaelSize;
  loading?: "eager" | "lazy";
}

export type { CommonImageAttributes };
