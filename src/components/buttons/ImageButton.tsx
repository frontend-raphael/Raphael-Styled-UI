import { CommonButtonAttributes } from "@/types/component";
import { Image, ImageProps } from "../images";
import { StyledCommonButton } from ".";
import { propsMapper } from "@/utils";

type ImageButtonProps = CommonButtonAttributes & ImageProps;

const defaultProps: ImageButtonProps = {
  src: "",
  $imageWidth: "fit-content",
  $imageHeight: "fit-content",
  $imageBorderRadius: "0px",
  disabled: false,
  $buttonWidth: "fit-content",
  $buttonHeight: "fit-content",
  $buttonPadding: "0px",
  $buttonBorderRadius: "10px",
  onClick: () => {},
  className: "",
};

const ImageButton = (props: ImageButtonProps) => {
  const { className, disabled, onClick, ...etcProps } =
    propsMapper<ImageButtonProps>(defaultProps, props);

  return (
    <>
      <StyledCommonButton
        {...etcProps}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        <Image {...etcProps} />
      </StyledCommonButton>
    </>
  );
};

export type { ImageButtonProps };
export default ImageButton;
