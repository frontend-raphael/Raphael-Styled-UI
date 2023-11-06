import styled from "styled-components";
import { defaultPalette } from "@/resources";
import { KeyboardInputStringAttributes as TextFieldProps } from "@/types";
import { propsMapper } from "@/utils";

const defaultProps: TextFieldProps = {
  type: "text",
  value: "",
  disabled: false,
  minlength: 0,
  maxlength: 524288,
  placeholder: "",
  size: 0,
  readonly: false,
  autocomplete: false,
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => {},
  className: "",
};

const TextField = (props: TextFieldProps) => {
  const allProps = propsMapper<TextFieldProps, TextFieldProps>(
    defaultProps,
    props
  );

  return <StyledTextField {...allProps} />;
};

export default TextField;

const StyledTextField = styled.input<TextFieldProps>`
  width: ${(props) => props.$inputWidth};
  height: ${(props) => props.$inputHeight};
  padding: ${(props) => props.$keyboardInputPadding};
  font-size: ${(props) => props.$keyboardInputFontSize};
  font-weight: ${(props) => props.$keyboardInputFontWeight};
  background-color: ${(props) => props.$keyboardInputBackgroundColor};
  color: ${(props) => props.$keyboardInputColor};
  border-radius: ${(props) => props.$inputBorderRadius};
  border: 2px solid ${(props) => props.$keyboardInputBorderColor};
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.$keyboardInputColor};
  }

  &:focus {
    background-color: ${(props) => props.$keyboardInputFocusBackgroundColor};
    color: ${(props) => props.$keyboardInputFocusColor};
    border: 2px solid ${(props) => props.$keyboardInputFocusBorderColor};
  }

  &:disabled {
    background-color: ${defaultPalette.disable};
    color: ${defaultPalette.subFontColor};
  }
`;

export { StyledTextField };
