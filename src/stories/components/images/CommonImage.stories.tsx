import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "@/components";
import {
  commonImageAttributesDescription,
  commonComponentPropsDescription,
} from "@/resources";

const meta = {
  component: Image,
  title: "components/images/CommonImage",
  tags: ["autodocs"],
  argTypes: {
    src: { description: "아이콘 이미지의 URL", control: "text" },
    $imageWidth: {
      description: commonImageAttributesDescription.$imageWidth,
      control: "text",
    },
    $imageHeight: {
      description: commonImageAttributesDescription.$imageHeight,
      control: "text",
    },
    $imageBorderRadius: {
      description: commonImageAttributesDescription.$imageBorderRadius,
      control: "text",
    },
    className: { description: commonComponentPropsDescription.className },
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
