import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components";
import { commonComponentPropsDescription } from "@/resources";

const meta = {
  component: Slider,
  title: "components/inputs/Slider",
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: ``,
      control: "number",
    },
    disabled: {
      description: ``,
      control: "boolean",
    },
    min: {
      description: ``,
      control: "number",
    },
    max: {
      description: ``,
      control: "number",
    },
    step: {
      description: ``,
      control: "number",
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
    $sliderBackgroundColor: {
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
    onChange: {
      description: ``,
    },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultSlider = {
  args: {},
} satisfies Story;

const EventSlider = {
  render: () => {
    const setOnChangeListener = (value: number) => {
      console.log(value);
    };

    return (
      <Slider
        value={0}
        setOnChangeListener={setOnChangeListener}
        min={0}
        max={100}
      />
    );
  },
} satisfies Story;

export { DefaultSlider, EventSlider };
