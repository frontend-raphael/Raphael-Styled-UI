import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/buttons";
import {
  buttonAttributesDescription,
  commonButtonAttributesDescription,
  commonComponentPropsDescription,
} from "@/resources";

const meta = {
  component: Button,
  title: "components/buttons/CommonButton",
  tags: ["autodocs"],
  argTypes: {
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const DefaultButton = {
  args: {
    buttonLabel: "TEST",
  },
} satisfies Story;

export { DefaultButton };
