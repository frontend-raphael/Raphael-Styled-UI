import type { Meta, StoryObj } from "@storybook/react";
import { IconLabelButton } from "@/components/buttons";

const meta = {
  component: IconLabelButton,
  title: "components/buttons/IconLabelButton",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    $IconLabelButtonGravity: {
      options: ["LEFT", "RIGHT"],
      control: { type: "radio" },
    },
    $imageBorderRadius: { control: "text" },
    $IconLabelButtonSpace: { control: "text" },
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
} satisfies Meta<typeof IconLabelButton>;

export default meta;
type Story = StoryObj<typeof IconLabelButton>;

const DefaultButton = {
  args: {
    buttonLabel: "TEST",
    src: "https://cdn.pixabay.com/photo/2023/10/28/16/27/mountains-8347890_1280.jpg",
  },
} satisfies Story;

export { DefaultButton };
