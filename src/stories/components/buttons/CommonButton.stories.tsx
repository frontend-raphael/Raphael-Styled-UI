import type { Meta, StoryObj } from "@storybook/react";
import CommonButton from "@/components/buttons/CommonButton";

const meta = {
  component: CommonButton,
  title: "components/buttons/CommonButton",
  tags: ["autodocs"],
  argTypes: {
    $width: { control: "text" },
    $height: { control: "text" },
    $padding: { control: "text" },
    $fontSize: { control: "text" },
    $backgroundColor: { control: "color" },
    $color: { control: "color" },
    $hoverBackgroundColor: { control: "color" },
    $hoverColor: { control: "color" },
    $borderRadius: { control: "text" },
  },
} satisfies Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof CommonButton>;

const Button = {
  args: {
    label: "TEST",
  },
} satisfies Story;

export { Button };
