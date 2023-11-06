import type { Meta, StoryObj } from "@storybook/react";
import { ValidCheckTextField } from "@/components";
import { commonComponentPropsDescription, defaultPalette } from "@/resources";
import { useState } from "react";
import { RaphaelColor } from "@/types";

const meta = {
  component: ValidCheckTextField,
  title: "components/inputs/ValidCheckTextField",
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
    messageColor: {
      description: ``,
      control: "color",
    },
    message: {
      description: ``,
      control: "text",
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
// you can make custom hooks check valid
type CheckValidType = [string, RaphaelColor];

interface CheckValidProps {
  success: CheckValidType;
  warning: CheckValidType;
  error: CheckValidType;
}

const useCheckValid = (props: CheckValidProps) => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState<RaphaelColor>(defaultPalette.success);

  const handleInputChange = (text: string) => {
    if (!text) {
      setMessage("");
      return;
    }

    if (text.toLowerCase() === "pikachu") {
      setMessage(props.success[0]);
      setColor(props.success[1]);
    } else if (text.toLowerCase() === "raichu") {
      setMessage(props.warning[0]);
      setColor(props.warning[1]);
    } else {
      setMessage(props.error[0]);
      setColor(props.error[1]);
    }
  };

  return { message, color, handleInputChange };
};
const EventTextField = {
  render: () => {
    const [value, setValue] = useState("");
    const { message, color, handleInputChange } = useCheckValid({
      success: ["success", defaultPalette.success],
      warning: ["almost close", defaultPalette.warning],
      error: ["wrong", defaultPalette.error],
    });

    const setOnChangeListener = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      handleInputChange(e.target.value);
    };

    const setOnKeyPressListener = (
      e: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key === "Enter") {
        alert(value);
      }
    };

    return (
      <ValidCheckTextField
        type="text"
        value={value}
        onChange={setOnChangeListener}
        onKeyPress={setOnKeyPressListener}
        message={message}
        messageColor={color}
        placeholder="
        What about the yellow rat Pokemon?"
      />
    );
  },
} satisfies Story;

export { DefaultTextField, EventTextField };
