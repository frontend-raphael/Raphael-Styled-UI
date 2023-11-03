import styled from "styled-components";
import { RaphaelSize } from "@/types/css";
import { ImageProps, Image } from ".";
import { propsMapper } from "@/utils";

interface IconImageProps
  extends Pick<ImageProps, "$imageBorderRadius" | "className" | "src"> {
  $iconImageSize?: RaphaelSize;
}

const defaultProps: IconImageProps = {
  src: "",
  $iconImageSize: "24px",
  $imageBorderRadius: "50%",
  className: "",
};

const IconImage = (props: IconImageProps) => {
  return (
    <StyledIconImage
      {...propsMapper<IconImageProps, IconImageProps>(defaultProps, props)}
    />
  );
};

export type { IconImageProps };
export default IconImage;

const StyledIconImage = styled(Image)<IconImageProps>`
  width: ${(props) => props.$iconImageSize};
  height: ${(props) => props.$iconImageSize};
  border-radius: ${(props) => props.$imageBorderRadius};
`;

export { StyledIconImage };
