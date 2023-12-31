import { RaphaelColor, RaphaelSize } from "@/types";
import { CommonComponentAttributes } from "..";

interface CommonInputAttributes<T> extends CommonComponentAttributes {
  $inputWidth?: RaphaelSize;
  $inputHeight?: RaphaelSize;
  $inputBorderRadius?: RaphaelSize;
  disabled?: boolean;
  value: T;
}

interface KeyboardInputAttributes<T> extends CommonInputAttributes<T> {
  minlength?: number;
  maxlength?: number;
  placeholder?: string;
  size?: number;
  readonly?: boolean;
  autocomplete?: boolean;
  setOnEnterListener?: (value: string) => void;
  $keyboardInputPadding?: RaphaelSize;
  $keyboardInputFontSize?: RaphaelSize;
  $keyboardInputFontWeight?: number;
  $keyboardInputBorderColor?: RaphaelColor;
  $keyboardInputBackgroundColor?: RaphaelColor;
  $keyboardInputColor?: RaphaelColor;
  $keyboardInputFocusBorderColor?: RaphaelColor;
  $keyboardInputFocusBackgroundColor?: RaphaelColor;
  $keyboardInputFocusColor?: RaphaelColor;
}

interface KeyboardInputStringAttributes
  extends KeyboardInputAttributes<string> {
  type: "text" | "password";
}

export type {
  CommonInputAttributes,
  KeyboardInputAttributes,
  KeyboardInputStringAttributes,
};
