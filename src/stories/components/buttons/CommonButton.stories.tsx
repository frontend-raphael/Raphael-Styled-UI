import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/buttons";
const meta = {
  component: Button,
  title: "components/buttons/CommonButton",
  tags: ["autodocs"],
  argTypes: {
    $width: { control: "text" },
    $height: { control: "text" },
    $padding: { control: "text" },
    $fontSize: { control: "text" },
    $fontWeight: { control: "number" },
    $backgroundColor: { control: "color" },
    $color: { control: "color" },
    $hoverBackgroundColor: { control: "color" },
    $hoverColor: { control: "color" },
    $borderRadius: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const DefaultButton = {
  args: {
    label: "TEST",
  },
} satisfies Story;

export { DefaultButton };