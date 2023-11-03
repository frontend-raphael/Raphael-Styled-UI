import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@/components";

const meta = {
  component: Image,
  title: "components/images/CommonImage",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    $imageWidth: { control: "text" },
    $imageHeight: { control: "text" },
    $imageBorderRadius: { control: "text" },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultImage = {
  args: {
    src: "https://cdn.pixabay.com/photo/2023/10/28/16/27/mountains-8347890_1280.jpg",
  },
} satisfies Story;

export { DefaultImage };
