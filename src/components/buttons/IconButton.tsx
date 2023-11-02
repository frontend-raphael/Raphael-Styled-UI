import styled from "styled-components";
import { StyledCommonButton } from "./CommonButton";
import { CommonButtonProps } from "@/types/component";
import IconImage, { IconImageProps } from "../images/IconImage";
import { defaultPalette } from "@/resources";
import { RaphaelSize } from "@/types/css";

type IconButtonGravity = "LEFT" | "RIGHT";

interface IconButtonImageAttributes extends IconImageProps {
  $iconButtonGravity?: IconButtonGravity;
  $iconButtonSpace?: RaphaelSize;
}

type IconButtonProps = CommonButtonProps & IconButtonImageAttributes;

const IconButton = ({
  buttonLabel = "",
  src = "https://placehold.co/24x24",
  isButtonDisabled = false,
  $iconButtonGravity = "LEFT",
  $iconImageSize = "24px",
  $iconButtonSpace = "4px",
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
}: IconButtonProps) => {
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
      <StyledIconButtonContentWrapper>
        {$iconButtonGravity === "LEFT" && (
          <StyledIconButtonImage
            src={src}
            $imageBorderRadius={$imageBorderRadius}
            $iconImageSize={$iconImageSize}
            $iconButtonGravity={$iconButtonGravity}
            $iconButtonSpace={$iconButtonSpace}
          />
        )}
        {buttonLabel}
        {$iconButtonGravity === "RIGHT" && (
          <StyledIconButtonImage
            src={src}
            $imageBorderRadius={$imageBorderRadius}
            $iconImageSize={$iconImageSize}
            $iconButtonGravity={$iconButtonGravity}
            $iconButtonSpace={$iconButtonSpace}
          />
        )}
      </StyledIconButtonContentWrapper>
    </StyledCommonButton>
  );
};

export default IconButton;

const StyledIconButtonContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledIconButtonImage = styled(IconImage)<IconButtonImageAttributes>`
  margin-right: ${(props) =>
    props.$iconButtonGravity === "LEFT" ? props.$iconButtonSpace : 0};
  margin-left: ${(props) =>
    props.$iconButtonGravity === "RIGHT" ? props.$iconButtonSpace : 0};
`;

export { StyledIconButtonContentWrapper };
