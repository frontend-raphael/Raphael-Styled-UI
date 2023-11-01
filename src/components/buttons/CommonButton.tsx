import { CommonComponentProps } from "@/types/component/CommonComponentProps";
import { RaphaelColor } from "@/types/css/Color";
import { RaphaelSize } from "@/types/css/Size";
import { defaultPalette } from "@/resources/colors/colors";
import styled from "styled-components";

interface CommonButtonAttributes extends CommonComponentProps {
  $width?: RaphaelSize;
  $height?: RaphaelSize;
  $padding?: RaphaelSize;
  $fontSize?: RaphaelSize;
  $backgroundColor?: RaphaelColor;
  $color?: RaphaelColor;
  $hoverBackgroundColor?: RaphaelColor;
  $hoverColor?: RaphaelColor;
  $borderRadius?: RaphaelSize;
  $onClick?: () => void;
}

interface CommonButtonProps extends CommonButtonAttributes {
  label: string;
  isEnabled?: boolean;
}

const CommonButton = ({
  label = "",
  isEnabled = true,
  $width = "fit-content",
  $height = "fit-content",
  $padding = "10px",
  $fontSize = "16px",
  $backgroundColor = defaultPalette.primaryColor,
  $color = defaultPalette.white,
  $hoverBackgroundColor = defaultPalette.lightPrimaryColor,
  $hoverColor = defaultPalette.white,
  $borderRadius = "10px",
  $onClick = () => {},
  className = "",
}: CommonButtonProps) => {
  return (
    <>
      {isEnabled ? (
        <CommonButtonWrapper
          $width={$width}
          $height={$height}
          $padding={$padding}
          $fontSize={$fontSize}
          $backgroundColor={$backgroundColor}
          $color={$color}
          $hoverBackgroundColor={$hoverBackgroundColor}
          $hoverColor={$hoverColor}
          $borderRadius={$borderRadius}
          onClick={$onClick}
          className={className}
        >
          {label}
        </CommonButtonWrapper>
      ) : (
        <DisableCommonButtonWrapper
          $width={$width}
          $height={$height}
          $padding={$padding}
          $fontSize={$fontSize}
          $backgroundColor={$backgroundColor}
          $color={$color}
          $hoverBackgroundColor={$hoverBackgroundColor}
          $hoverColor={$hoverColor}
          $borderRadius={$borderRadius}
          onClick={$onClick}
          className={className}
        >
          {label}
        </DisableCommonButtonWrapper>
      )}
    </>
  );
};

export default CommonButton;

const CommonButtonWrapper = styled.div<CommonButtonAttributes>`
  display: inline-block;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  border-radius: ${(props) => props.$borderRadius};
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
    color: ${(props) => props.$hoverColor};
  }
`;

const DisableCommonButtonWrapper = styled.div<CommonButtonAttributes>`
  display: inline-block;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  background-color: ${defaultPalette.disable};
  border-radius: ${(props) => props.$borderRadius};
  text-align: center;
  color: ${defaultPalette.lightBlack};
`;
