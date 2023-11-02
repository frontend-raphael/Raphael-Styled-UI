import styled from "styled-components";
import CommonImage from "./CommonImage";
import { CommonImageProps } from "@/types/component";
import { RaphaelSize } from "@/types/css";

interface IconImageProps extends CommonImageProps {
  $iconImageSize?: RaphaelSize;
}

const IconImage = ({
  src = "",
  $iconImageSize = "24px",
  $imageBorderRadius = "50%",
  className = "",
}: IconImageProps) => {
  return (
    <StyledIconImage
      src={src}
      $iconImageSize={$iconImageSize}
      $imageBorderRadius={$imageBorderRadius}
      className={className}
    />
  );
};

export type { IconImageProps };
export default IconImage;

const StyledIconImage = styled(CommonImage)<IconImageProps>`
  width: ${(props) => props.$iconImageSize};
  height: ${(props) => props.$iconImageSize};
  border-radius: ${(props) => props.$imageBorderRadius};
`;

export { StyledIconImage };
