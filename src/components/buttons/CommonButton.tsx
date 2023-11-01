import { defaultPalette } from "@/resources/colors/colors";
import styled from "styled-components";
import {
  CommonButtonAttributes,
  CommonButtonProps,
} from "@/types/component/button/CommonButtonAttributes";

const CommonButton = ({
  label = "",
  isEnabled = true,
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
}: CommonButtonProps) => {
  return (
    <>
      {isEnabled ? (
        <CommonButtonWrapper
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
          {label}
        </CommonButtonWrapper>
      ) : (
        <DisableCommonButtonWrapper
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
  font-weight: ${(props) => props.$fontWeight};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  border-radius: ${(props) => props.$borderRadius};
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;

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
  font-weight: ${(props) => props.$fontWeight};
  background-color: ${defaultPalette.disable};
  border-radius: ${(props) => props.$borderRadius};
  text-align: center;
  box-sizing: border-box;
  color: ${defaultPalette.subFontColor};
`;
