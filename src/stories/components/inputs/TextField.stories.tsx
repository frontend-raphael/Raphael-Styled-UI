import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/components";
import { commonComponentPropsDescription } from "@/resources";

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
    setOnChangeListener: {
      description: ``,
    },
    setOnEnterListener: {
      description: ``,
    },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultTextField = {} satisfies Story;

const EventTextField = {
  render: () => {
    const setOnChangeListener = (value: string) => {
      console.log(value);
    };

    const setOnEnterListener = (value: string) => {
      console.log(value);
    };

    return (
      <TextField
        type="text"
        value={""}
        setOnChangeListener={setOnChangeListener}
        setOnEnterListener={setOnEnterListener}
      />
    );
  },
} satisfies Story;

export { DefaultTextField, EventTextField };
