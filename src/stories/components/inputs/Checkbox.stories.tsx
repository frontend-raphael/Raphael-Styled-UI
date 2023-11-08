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
    },
    $checkboxSize: {
      description: ``,
      control: "text",
    },
    $checkedImg: {
      description: ``,
      control: "text",
    },
    $uncheckedImg: {
      description: ``,
      control: "text",
    },
    $disabledImg: {
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
  args: {
    $checkedImg: "https://www.svgrepo.com/show/510900/checkbox-check.svg",
    $uncheckedImg: "https://www.svgrepo.com/show/510902/checkbox-unchecked.svg",
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    const setOnClickListener = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(!checked);
    };

    return (
      <Checkbox
        value={"TEST"}
        onChange={setOnClickListener}
        checked={checked}
        $checkedImg="https://www.svgrepo.com/show/510900/checkbox-check.svg"
        $uncheckedImg="https://www.svgrepo.com/show/510902/checkbox-unchecked.svg"
        $disabledImg=""
      />
    );
  },
} satisfies Story;

export { DefaultCheckbox };
