import { Button, Popover } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

const meta = {
  component: Popover,
  title: "components/layouts/Popover",
  tags: ["autodocs"],
  argTypes: {
    $zIndex: {
      description: ``,
      control: "number",
    },
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const DefaultPopover = {
  render: () => {
    const Wrapper = styled.div`
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    `;
    return (
      <Popover trigger={<Button buttonLabel="Trigger" />}>
        <Wrapper>
          <Button buttonLabel="Item 1" />
          <Button buttonLabel="Item 2" />
          <Button buttonLabel="Item 3" />
          <Button buttonLabel="Item 4" />
        </Wrapper>
      </Popover>
    );
  },
} satisfies Story;

export { DefaultPopover };
