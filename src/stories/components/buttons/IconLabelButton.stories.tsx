import type { Meta, StoryObj } from "@storybook/react";
import { IconLabelButton } from "@/components/buttons";
import {
  buttonAttributesDescription,
  commonButtonAttributesDescription,
  commonComponentPropsDescription,
} from "@/resources";

const meta = {
  component: IconLabelButton,
  title: "components/buttons/IconLabelButton",
  tags: ["autodocs"],
  argTypes: {
    src: { description: "아이콘 이미지의 URL", control: "text" },
    $IconLabelButtonGravity: {
      description: `아이콘의 위치를 지정하는 열거형. "LEFT" 또는 "RIGHT" 중 하나를 선택할 수 있습니다.`,
      options: ["LEFT", "RIGHT"],
      control: { type: "radio" },
    },
    $imageBorderRadius: {
      description: `아이콘 이미지의 모서리 둥글기. 기본값은 "50%"로 설정되어 있습니다.`,
      control: "text",
    },
    $IconLabelButtonSpace: {
      description: "아이콘과 레이블 사이의 간격.",
      control: "text",
    },
    $iconImageSize: {
      description: `아이콘 이미지의 크기. 기본값은 "24px"로 설정되어 있습니다. 항상 가로 세로가 같습니다.`,
      control: "text",
    },
    buttonLabel: { description: "버튼에 표시되는 텍스트 레이블." },
    $buttonWidth: {
      description: commonButtonAttributesDescription.$buttonWidth,
      control: "text",
    },
    $buttonHeight: {
      description: commonButtonAttributesDescription.$buttonHeight,
      control: "text",
    },
    $buttonPadding: {
      description: commonButtonAttributesDescription.$buttonPadding,
      control: "text",
    },
    $buttonFontSize: {
      description: buttonAttributesDescription.$buttonFontSize,
      control: "text",
    },
    $buttonFontWeight: {
      description: buttonAttributesDescription.$buttonFontWeight,
      control: "number",
    },
    $buttonBackgroundColor: {
      description: buttonAttributesDescription.$buttonBackgroundColor,
      control: "color",
    },
    $buttonColor: {
      description: buttonAttributesDescription.$buttonColor,
      control: "color",
    },
    $buttonHoverBackgroundColor: {
      description: buttonAttributesDescription.$buttonHoverBackgroundColor,
      control: "color",
    },
    $buttonHoverColor: {
      description: buttonAttributesDescription.$buttonHoverColor,
      control: "color",
    },
    $buttonBorderRadius: {
      description: commonButtonAttributesDescription.$buttonBorderRadius,
      control: "text",
    },
    disabled: { description: commonButtonAttributesDescription.disabled },
    onClick: { description: commonButtonAttributesDescription.onClick },
    className: { description: commonComponentPropsDescription.className },
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
