import styled from "styled-components";
import { CommonImageAttributes } from "@/types/component";
import { propsMapper } from "@/utils";

interface ImageProps extends CommonImageAttributes {
  src: string;
}

const defaultProps: ImageProps = {
  src: "",
  $imageWidth: "fit-content",
  $imageHeight: "fit-content",
  $imageBorderRadius: "0px",
  loading: "eager",
  className: "",
};

const CommonImage = (props: ImageProps) => {
  const { loading, ...etcProps } = propsMapper<ImageProps, ImageProps>(
    defaultProps,
    props
  );

  return <StyledCommonImage {...etcProps} loading={loading} />;
};

export type { ImageProps };
export default CommonImage;

const StyledCommonImage = styled.img<CommonImageAttributes>`
  width: ${(props) => props.$imageWidth};
  height: ${(props) => props.$imageHeight};
  border-radius: ${(props) => props.$imageBorderRadius};
`;

export { StyledCommonImage };
