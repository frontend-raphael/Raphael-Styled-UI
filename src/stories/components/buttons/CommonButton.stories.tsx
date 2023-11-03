import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/buttons";

const meta = {
  component: Button,
  title: "components/buttons/CommonButton",
  tags: ["autodocs"],
  argTypes: {
    $buttonWidth: { control: "text" },
    $buttonHeight: { control: "text" },
    $buttonPadding: { control: "text" },
    $buttonFontSize: { control: "text" },
    $buttonFontWeight: { control: "number" },
    $buttonBackgroundColor: { control: "color" },
    $buttonColor: { control: "color" },
    $buttonHoverBackgroundColor: { control: "color" },
    $buttonHoverColor: { control: "color" },
    $buttonBorderRadius: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const DefaultButton = {
  args: {
    buttonLabel: "TEST",
  },
} satisfies Story;

export { DefaultButton };
