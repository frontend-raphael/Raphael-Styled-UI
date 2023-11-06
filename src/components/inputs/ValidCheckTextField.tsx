import styled from "styled-components";
import { KeyboardInputStringAttributes, RaphaelColor } from "@/types";
import { defaultPalette } from "@/resources";
import { propsMapper } from "@/utils";
import { TextField } from ".";

interface ValidCheckTextFieldProps extends KeyboardInputStringAttributes {
  message: string;
  messageColor: RaphaelColor;
}

const defaultProps: ValidCheckTextFieldProps = {
  type: "text",
  value: "",
  disabled: false,
  minlength: 0,
  maxlength: 524288,
  placeholder: "",
  size: 0,
  readonly: false,
  autocomplete: false,
  message: "",
  $inputWidth: "100%",
  $inputHeight: "fit-content",
  $inputBorderRadius: "10px",
  $keyboardInputPadding: "8px",
  $keyboardInputFontSize: "16px",
  $keyboardInputFontWeight: 400,
  $keyboardInputBorderColor: defaultPalette.borderColor,
  $keyboardInputBackgroundColor: defaultPalette.primaryColor,
  $keyboardInputColor: defaultPalette.mainFontColor,
  $keyboardInputFocusBorderColor: defaultPalette.subColor,
  $keyboardInputFocusBackgroundColor: defaultPalette.primaryColor,
  $keyboardInputFocusColor: defaultPalette.mainFontColor,
  messageColor: defaultPalette.error,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => {},
  className: "",
};

const ValidCheckTextField = (props: ValidCheckTextFieldProps) => {
  const { className, message, messageColor, ...etcProps } = propsMapper<
    ValidCheckTextFieldProps,
    ValidCheckTextFieldProps
  >(defaultProps, props);
  return (
    <StyledValidCheckTextFieldWrapper className={className}>
      <TextField {...etcProps} />
      {message && (
        <StyledMessageWrapper $messageColor={messageColor}>
          {message}
        </StyledMessageWrapper>
      )}
    </StyledValidCheckTextFieldWrapper>
  );
};

export type { ValidCheckTextFieldProps };
export default ValidCheckTextField;

const StyledValidCheckTextFieldWrapper = styled.div`
  box-sizing: border-box;
`;

const StyledMessageWrapper = styled.div<{ $messageColor: RaphaelColor }>`
  color: ${(props) => props.$messageColor};
  font-size: 12px;
  padding-top: 10px;
`;

export { StyledValidCheckTextFieldWrapper, StyledMessageWrapper };
