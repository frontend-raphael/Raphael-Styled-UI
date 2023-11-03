import styled from "styled-components";
import { StyledCommonButton } from "./CommonButton";
import { CommonButtonProps } from "@/types/component";
import IconImage, { IconImageProps } from "../images/IconImage";
import { defaultPalette } from "@/resources";
import { RaphaelSize } from "@/types/css";

type IconLabelButtonGravity = "LEFT" | "RIGHT";

interface IconLabelButtonImageAttributes extends IconImageProps {
  $IconLabelButtonGravity?: IconLabelButtonGravity;
  $IconLabelButtonSpace?: RaphaelSize;
}

type IconLabelButtonProps = CommonButtonProps & IconLabelButtonImageAttributes;

const IconLabelButton = ({
  buttonLabel = "",
  src = "https://placehold.co/24x24",
  isButtonDisabled = false,
  $IconLabelButtonGravity = "LEFT",
  $iconImageSize = "24px",
  $IconLabelButtonSpace = "4px",
  $imageBorderRadius = "50%",
  $buttonWidth = "fit-content",
  $buttonHeight = "fit-content",
  $buttonPadding = "10px",
  $buttonFontSize = "16px",
  $buttonFontWeight = 400,
  $buttonBackgroundColor = defaultPalette.primaryColor,
  $buttonColor = defaultPalette.mainFontColor,
  $buttonHoverBackgroundColor = defaultPalette.lightPrimaryColor,
  $buttonHoverColor = defaultPalette.mainFontColor,
  $buttonBorderRadius = "10px",
  onClick = () => {},
  className = "",
}: IconLabelButtonProps) => {
  return (
    <StyledCommonButton
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
      $buttonPadding={$buttonPadding}
      $buttonFontSize={$buttonFontSize}
      $buttonFontWeight={$buttonFontWeight}
      $buttonBackgroundColor={$buttonBackgroundColor}
      $buttonColor={$buttonColor}
      $buttonHoverBackgroundColor={$buttonHoverBackgroundColor}
      $buttonHoverColor={$buttonHoverColor}
      $buttonBorderRadius={$buttonBorderRadius}
      onClick={onClick}
      disabled={isButtonDisabled}
      className={className}
    >
      <StyledIconLabelButtonContentWrapper>
        {$IconLabelButtonGravity === "LEFT" && (
          <StyledIconLabelButtonImage
            src={src}
            $imageBorderRadius={$imageBorderRadius}
            $iconImageSize={$iconImageSize}
            $IconLabelButtonGravity={$IconLabelButtonGravity}
            $IconLabelButtonSpace={$IconLabelButtonSpace}
          />
        )}
        {buttonLabel}
        {$IconLabelButtonGravity === "RIGHT" && (
          <StyledIconLabelButtonImage
            src={src}
            $imageBorderRadius={$imageBorderRadius}
            $iconImageSize={$iconImageSize}
            $IconLabelButtonGravity={$IconLabelButtonGravity}
            $IconLabelButtonSpace={$IconLabelButtonSpace}
          />
        )}
      </StyledIconLabelButtonContentWrapper>
    </StyledCommonButton>
  );
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

export { StyledIconLabelButtonContentWrapper };
