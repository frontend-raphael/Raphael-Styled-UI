import type { Meta, StoryObj } from "@storybook/react";
import { ImageCheckbox } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import { useState } from "react";

const meta = {
  component: ImageCheckbox,
  title: "components/inputs/ImageCheckbox",
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
    $imageCheckboxSize: {
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

const DefaultImageCheckbox = {
  args: {
    $checkedImg:
      "https://drive.google.com/uc?id=17Y64ZSwwOKIpctSc-EG4kDSLwNQM0uUk",
    $uncheckedImg:
      "https://drive.google.com/uc?id=1lz9B3L1fbR593mysZmjXZ7YbGWgJb9mU",
    $disabledImg:
      "https://drive.google.com/uc?id=1KI5eBRE0E0CBlUZrWC0xBygFONqggVcl",
  },
} satisfies Story;

const EventImageCheckbox = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const setOnClickListener = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(!checked);
    };

    return (
      <ImageCheckbox
        value={"TEST"}
        onChange={setOnClickListener}
        checked={checked}
        $checkedImg="https://drive.google.com/uc?id=17Y64ZSwwOKIpctSc-EG4kDSLwNQM0uUk"
        $uncheckedImg="https://drive.google.com/uc?id=1lz9B3L1fbR593mysZmjXZ7YbGWgJb9mU"
        $disabledImg="https://drive.google.com/uc?id=1KI5eBRE0E0CBlUZrWC0xBygFONqggVcl"
      />
    );
  },
} satisfies Story;

export { DefaultImageCheckbox, EventImageCheckbox };
