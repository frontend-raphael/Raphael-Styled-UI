import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import { useState } from "react";

const meta = {
  component: TextField,
  title: "components/inputs/TextField",
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: ``,
      options: ["text", "password"],
      control: { type: "radio" },
    },
    value: {
      description: ``,
      control: "text",
    },
    disabled: {
      description: ``,
    },
    minlength: {
      description: ``,
      control: "number",
    },
    maxlength: {
      description: ``,
      control: "number",
    },
    placeholder: {
      description: ``,
      control: "text",
    },
    size: {
      description: ``,
      control: "number",
    },
    readonly: {
      description: ``,
    },
    autocomplete: {
      description: ``,
    },
    $inputWidth: {
      description: ``,
      control: "text",
    },
    $inputHeight: {
      description: ``,
      control: "text",
    },
    $inputBorderRadius: {
      description: ``,
      control: "text",
    },
    $keyboardInputPadding: {
      description: ``,
      control: "text",
    },
    $keyboardInputFontSize: {
      description: ``,
      control: "text",
    },
    $keyboardInputFontWeight: {
      description: ``,
      control: "number",
    },
    $keyboardInputBorderColor: {
      description: ``,
      control: "color",
    },
    $keyboardInputBackgroundColor: {
      description: ``,
      control: "color",
    },
    $keyboardInputColor: {
      description: ``,
      control: "color",
    },
    $keyboardInputFocusBorderColor: {
      description: ``,
      control: "color",
    },
    $keyboardInputFocusBackgroundColor: {
      description: ``,
      control: "color",
    },
    $keyboardInputFocusColor: {
      description: ``,
      control: "color",
    },
    onChange: {
      description: ``,
    },
    onKeyPress: {
      description: ``,
    },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultTextField = {};

const EventTextField = {
  render: () => {
    const [value, setValue] = useState("");

    const setOnChangeListener = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const setOnKeyPressListener = (
      e: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key === "Enter") {
        alert(value);
      }
    };

    return (
      <TextField
        type="text"
        value={value}
        onChange={setOnChangeListener}
        onKeyPress={setOnKeyPressListener}
      />
    );
  },
} satisfies Story;

export { DefaultTextField, EventTextField };
