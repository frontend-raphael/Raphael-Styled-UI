import { defaultPalette } from "@/resources/colors/colors";
import {
  CommonButtonAttributes,
  CommonButtonProps,
} from "@/types/component/button/CommonButtonAttributes";
import { RaphaelSize } from "@/types/css/Size";
import styled from "styled-components";

type ImgGravity = "LEFT" | "RIGHT";

interface IconAttributes {
  $iconSize?: RaphaelSize;
  $space?: RaphaelSize;
  $iconRadius?: RaphaelSize;
  $imgGravity?: ImgGravity;
}

interface IconButtonProps extends CommonButtonProps, IconAttributes {
  $imgSrc: string;
}

const IconButton = ({
  label = "",
  isEnabled = true,
  $imgSrc = "https://placehold.co/24x24",
  $imgGravity = "LEFT",
  $iconSize = "24px",
  $space = "4px",
  $iconRadius = "50%",
  $width = "fit-content",
  $height = "fit-content",
  $padding = "10px",
  $fontSize = "16px",
  $fontWeight = 400,
  $backgroundColor = defaultPalette.primaryColor,
  $color = defaultPalette.mainFontColor,
  $hoverBackgroundColor = defaultPalette.lightPrimaryColor,
  $hoverColor = defaultPalette.mainFontColor,
  $borderRadius = "10px",
  $onClick = () => {},
  className = "",
}: IconButtonProps) => {
  return (
    <>
      {isEnabled ? (
        <IconButtonWrapper
          $width={$width}
          $height={$height}
          $padding={$padding}
          $fontSize={$fontSize}
          $fontWeight={$fontWeight}
          $backgroundColor={$backgroundColor}
          $color={$color}
          $hoverBackgroundColor={$hoverBackgroundColor}
          $hoverColor={$hoverColor}
          $borderRadius={$borderRadius}
          onClick={$onClick}
          className={className}
        >
          <IconButtonContent>
            {$imgGravity === "LEFT" ? (
              <>
                <Icon
                  src={$imgSrc}
                  $iconSize={$iconSize}
                  $iconRadius={$iconRadius}
                  $space={$space}
                  $imgGravity={$imgGravity}
                />
                {label}
              </>
            ) : (
              <>
                {label}
                <Icon
                  src={$imgSrc}
                  $iconSize={$iconSize}
                  $iconRadius={$iconRadius}
                  $space={$space}
                  $imgGravity={$imgGravity}
                />
              </>
            )}
          </IconButtonContent>
        </IconButtonWrapper>
      ) : (
        <DisableIconButtonWrapper
          $width={$width}
          $height={$height}
          $padding={$padding}
          $fontSize={$fontSize}
          $fontWeight={$fontWeight}
          $backgroundColor={$backgroundColor}
          $color={$color}
          $hoverBackgroundColor={$hoverBackgroundColor}
          $hoverColor={$hoverColor}
          $borderRadius={$borderRadius}
          onClick={$onClick}
          className={className}
        >
          <IconButtonContent>
            {$imgGravity === "LEFT" ? (
              <>
                <Icon
                  src={$imgSrc}
                  $iconSize={$iconSize}
                  $iconRadius={$iconRadius}
                  $space={$space}
                  $imgGravity={$imgGravity}
                />
                {label}
              </>
            ) : (
              <>
                {label}
                <Icon
                  src={$imgSrc}
                  $iconSize={$iconSize}
                  $iconRadius={$iconRadius}
                  $space={$space}
                  $imgGravity={$imgGravity}
                />
              </>
            )}
          </IconButtonContent>
        </DisableIconButtonWrapper>
      )}
    </>
  );
};

export default IconButton;

const IconButtonWrapper = styled.div<CommonButtonAttributes>`
  display: inline-block;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  border-radius: ${(props) => props.$borderRadius};
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
    color: ${(props) => props.$hoverColor};
  }
`;

const DisableIconButtonWrapper = styled.div<CommonButtonAttributes>`
  display: inline-block;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  background-color: ${defaultPalette.disable};
  border-radius: ${(props) => props.$borderRadius};
  box-sizing: border-box;
  color: ${defaultPalette.subFontColor};
`;

const IconButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Icon = styled.img<IconAttributes>`
  width: ${(props) => props.$iconSize};
  height: ${(props) => props.$iconSize};
  border-radius: ${(props) => props.$iconRadius};
  margin-right: ${(props) => (props.$imgGravity === "LEFT" ? props.$space : 0)};
  margin-left: ${(props) => (props.$imgGravity === "RIGHT" ? props.$space : 0)};
`;
