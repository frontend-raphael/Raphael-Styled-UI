import styled from "styled-components";
import { RaphaelSize } from "@/types/css";
import { ImageProps, Image } from ".";
import { propsMapper } from "@/utils";

interface IconImageProps
  extends Pick<
    ImageProps,
    "$imageBorderRadius" | "className" | "src" | "loading"
  > {
  $iconImageSize?: RaphaelSize;
}

const defaultProps: IconImageProps = {
  src: "",
  $iconImageSize: "24px",
  $imageBorderRadius: "50%",
  loading: "eager",
  className: "",
};

const IconImage = (props: IconImageProps) => {
  const { loading, ...etcProps } = propsMapper<ImageProps, ImageProps>(
    defaultProps,
    props
  );
  return <StyledIconImage {...etcProps} loading={loading} />;
};

export type { IconImageProps };
export default IconImage;

const StyledIconImage = styled(Image)<IconImageProps>`
  width: ${(props) => props.$iconImageSize};
  height: ${(props) => props.$iconImageSize};
  border-radius: ${(props) => props.$imageBorderRadius};
`;

export { StyledIconImage };
