import { IconImage } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  component: IconImage,
  title: "components/images/IconImage",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    $iconImageSize: { control: "text" },
    $imageBorderRadius: { control: "text" },
  },
} satisfies Meta<typeof IconImage>;

export default meta;
type Story = StoryObj<typeof IconImage>;

const DefaultIconImage = {
  args: {
    src: "https://cdn.pixabay.com/photo/2023/10/28/16/27/mountains-8347890_1280.jpg",
  },
} satisfies Story;

export { DefaultIconImage };
