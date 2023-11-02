import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@/components/buttons";

const meta = {
  component: IconButton,
  title: "components/buttons/IconButton",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    $iconButtonGravity: {
      options: ["LEFT", "RIGHT"],
      control: { type: "radio" },
    },
    $imageBorderRadius: { control: "text" },
    $iconButtonSpace: { control: "text" },
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

const DefaultButton = {
  args: {
    buttonLabel: "TEST",
    src: "https://cdn.pixabay.com/photo/2023/10/28/16/27/mountains-8347890_1280.jpg",
  },
} satisfies Story;

export { DefaultButton };
