import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import { useState } from "react";

const meta = {
  component: RangeSlider,
  title: "components/inputs/RangeSlider",
  tags: ["autodocs"],
  argTypes: {
    minValue: {
      description: ``,
      control: "number",
    },
    maxValue: {
      description: ``,
      control: "number",
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
    $inputBorderRadius: {
      description: ``,
      control: "text",
    },
    $RangeSliderBackgroundColor: {
      description: ``,
      control: "color",
    },
    $thumbSize: {
      description: ``,
      control: "text",
    },
    $thumbSrc: {
      description: ``,
      control: "text",
    },
    onValueChange: {
      description: ``,
    },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultRangeSlider = {
  args: {},
} satisfies Story;

const EventRangeSlider = {
  render: () => {
    const [value, setValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const setOnValueChangeListener = (minValue: number, maxValue: number) => {
      console.log(minValue, maxValue);
    };

    return (
      <RangeSlider
        minValue={value}
        maxValue={maxValue}
        onValueChange={setOnValueChangeListener}
        $inputWidth="200px"
      />
    );
  },
} satisfies Story;

export { DefaultRangeSlider, EventRangeSlider };
