import type { Meta, StoryObj } from "@storybook/react";
import { ImageButton } from "@/components";

const meta = {
  component: ImageButton,
  title: "components/buttons/ImageButton",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    $imageWidth: { control: "text" },
    $imageHeight: { control: "text" },
    $imageBorderRadius: { control: "text" },
    $buttonWidth: { control: "text" },
    $buttonHeight: { control: "text" },
    $buttonPadding: { control: "text" },
    $buttonBorderRadius: { control: "text" },
  },
} satisfies Meta<typeof ImageButton>;

export default meta;
type Story = StoryObj<typeof ImageButton>;

const DefaultButton = {
  args: {
    src: "https://cdn.pixabay.com/photo/2023/10/28/16/27/mountains-8347890_1280.jpg",
  },
} satisfies Story;

export { DefaultButton };
