import type { Meta, StoryObj } from "@storybook/react";
import { ImageButton } from "@/components";
import {
  commonButtonAttributesDescription,
  commonComponentPropsDescription,
  commonImageAttributesDescription,
} from "@/resources";

const meta = {
  component: ImageButton,
  title: "components/buttons/ImageButton",
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
    $buttonWidth: {
      description: commonButtonAttributesDescription.$buttonWidth,
      control: "text",
    },
    $buttonHeight: {
      description: commonButtonAttributesDescription.$buttonHeight,
      control: "text",
    },
    $buttonPadding: {
      description: `버튼의 안쪽 여백. 기본값은 "0px"로 설정되어 있습니다.`,
      control: "text",
    },
    $buttonBorderRadius: {
      description: `버튼의 모서리 둥글기. 기본값은 "0px"로 설정되어 있습니다.`,
      control: "text",
    },
    disabled: { description: commonButtonAttributesDescription.disabled },
    onClick: { description: commonButtonAttributesDescription.onClick },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof ImageButton>;

export default meta;
type Story = StoryObj<typeof ImageButton>;

const DefaultButton = {
  args: {
    src: "https://cdn.pixabay.com/photo/2023/10/12/23/43/bird-8311912_1280.jpg",
  },
} satisfies Story;

export { DefaultButton };
