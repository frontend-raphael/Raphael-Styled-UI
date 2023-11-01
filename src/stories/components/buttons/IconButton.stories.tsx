import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@/components/buttons";

const meta = {
  component: IconButton,
  title: "components/buttons/IconButton",
  tags: ["autodocs"],
  argTypes: {
    $imgSrc: { control: "text" },
    $imgGravity: { options: ["LEFT", "RIGHT"], control: { type: "radio" } },
    $iconRadius: { control: "text" },
    $space: { control: "text" },
    $width: { control: "text" },
    $height: { control: "text" },
    $padding: { control: "text" },
    $fontSize: { control: "text" },
    $backgroundColor: { control: "color" },
    $color: { control: "color" },
    $hoverBackgroundColor: { control: "color" },
    $hoverColor: { control: "color" },
    $borderRadius: { control: "text" },
    $iconSize: { control: "text" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

const DefaultButton = {
  args: {
    label: "TEST",
  },
} satisfies Story;

export { DefaultButton };
