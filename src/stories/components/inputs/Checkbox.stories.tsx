import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import { useState } from "react";

const meta = {
  component: Checkbox,
  title: "components/inputs/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: ``,
      control: "text",
    },
    checked: {
      description: ``,
      control: "boolean",
    },
    disabled: {
      description: ``,
      control: "boolean",
    },
    $inputWidth: {
      description: ``,
      control: "text",
    },
    $inputHeight: {
      description: ``,
      control: "text",
    },
    $checkedBackgroundColor: {
      description: ``,
      control: "color",
    },
    $uncheckedBackgroundColor: {
      description: ``,
      control: "color",
    },
    $markerColor: {
      description: ``,
      control: "color",
    },
    $markerWidth: {
      description: ``,
      control: "text",
    },
    onChange: {
      description: ``,
    },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultCheckbox = {
  args: {},
} satisfies Story;

const EventCheckbox = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const setOnChangeListener = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      setChecked(!checked);
    };

    return (
      <Checkbox
        value={"TEST"}
        onChange={setOnChangeListener}
        checked={checked}
      />
    );
  },
} satisfies Story;

export { DefaultCheckbox, EventCheckbox };
