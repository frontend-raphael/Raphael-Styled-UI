import styled from "styled-components";
import { defaultPalette } from "@/resources";
import { RaphaelSize } from "@/types/css";
import { IconImage, IconImageProps } from "../images";
import { ButtonProps, StyledCommonButton } from ".";
import { propsMapper } from "@/utils";

type IconLabelButtonGravity = "LEFT" | "RIGHT";

interface IconLabelButtonImageAttributes extends IconImageProps {
  $IconLabelButtonGravity?: IconLabelButtonGravity;
  $IconLabelButtonSpace?: RaphaelSize;
}

type IconLabelButtonProps = ButtonProps & IconLabelButtonImageAttributes;

const defaultProps: IconLabelButtonProps = {
  buttonLabel: "",
  src: "https://placehold.co/24x24",
  disabled: false,
  $IconLabelButtonGravity: "LEFT",
  $iconImageSize: "24px",
  $IconLabelButtonSpace: "4px",
  $imageBorderRadius: "50%",
  $buttonWidth: "fit-content",
  $buttonHeight: "fit-content",
  $buttonPadding: "10px",
  $buttonFontSize: "16px",
  $buttonFontWeight: 400,
  $buttonBackgroundColor: defaultPalette.primaryColor,
  $buttonColor: defaultPalette.mainFontColor,
  $buttonHoverBackgroundColor: defaultPalette.lightPrimaryColor,
  $buttonHoverColor: defaultPalette.mainFontColor,
  $buttonBorderRadius: "10px",
  onClick: () => {},
  className: "",
};

const IconLabelButton = (props: IconLabelButtonProps) => {
  const { buttonLabel, className, disabled, onClick, ...etcAttributes } =
    propsMapper<IconLabelButtonProps>(defaultProps, props);

  return (
    <StyledCommonButton
      {...etcAttributes}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <StyledIconLabelButtonContentWrapper>
        {etcAttributes.$IconLabelButtonGravity === "LEFT" && (
          <StyledIconLabelButtonImage {...etcAttributes} />
        )}
        {buttonLabel}
        {etcAttributes.$IconLabelButtonGravity === "RIGHT" && (
          <StyledIconLabelButtonImage {...etcAttributes} />
        )}
      </StyledIconLabelButtonContentWrapper>
    </StyledCommonButton>
  );
};

export type {
  IconLabelButtonGravity,
  IconLabelButtonImageAttributes,
  IconLabelButtonProps,
};
export default IconLabelButton;

const StyledIconLabelButtonContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledIconLabelButtonImage = styled(
  IconImage
)<IconLabelButtonImageAttributes>`
  margin-right: ${(props) =>
    props.$IconLabelButtonGravity === "LEFT" ? props.$IconLabelButtonSpace : 0};
  margin-left: ${(props) =>
    props.$IconLabelButtonGravity === "RIGHT"
      ? props.$IconLabelButtonSpace
      : 0};
`;

export { StyledIconLabelButtonContentWrapper, StyledIconLabelButtonImage };
