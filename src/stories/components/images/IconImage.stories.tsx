import type { Meta, StoryObj } from "@storybook/react";
import { IconImage } from "@/components";
import { commonComponentPropsDescription } from "@/resources";

const meta = {
  component: IconImage,
  title: "components/images/IconImage",
  tags: ["autodocs"],
  argTypes: {
    src: { description: "아이콘 이미지의 URL", control: "text" },
    $iconImageSize: {
      description: `아이콘 이미지의 크기. 기본값은 "24px"로 설정되어 있습니다. 항상 가로 세로가 같습니다.`,
      control: "text",
    },
    $imageBorderRadius: {
      description: `아이콘 이미지의 모서리 둥글기. 기본값은 "50%"로 설정되어 있습니다.`,
      control: "text",
    },
    className: { description: commonComponentPropsDescription.className },
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
