import { CommonImageAttributes, CommonImageProps } from "@/types/component";
import styled from "styled-components";

const CommonImage = ({
  src = "",
  $imageWidth = "fit-content",
  $imageHeight = "fit-content",
  $imageBorderRadius = "0px",
  className = "",
}: CommonImageProps) => {
  return (
    <StyledCommonImage
      src={src}
      $imageWidth={$imageWidth}
      $imageHeight={$imageHeight}
      $imageBorderRadius={$imageBorderRadius}
      className={className}
    />
  );
};

export default CommonImage;

const StyledCommonImage = styled.img<CommonImageAttributes>`
  width: ${(props) => props.$imageWidth};
  height: ${(props) => props.$imageHeight};
  border-radius: ${(props) => props.$imageBorderRadius};
`;

export { StyledCommonImage };
