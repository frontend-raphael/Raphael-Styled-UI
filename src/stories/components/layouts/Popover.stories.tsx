import { Button, Popover } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

const meta = {
  component: Popover,
  title: "components/layouts/Popover",
  tags: ["autodocs"],
  argTypes: {
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

const DefaultPopover = {
  render: () => {
    const Wrapper = styled.div`
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    `;
    return (
      <Popover>
        <Popover.Trigger>
          <Button buttonLabel="Trigger" />
        </Popover.Trigger>
        <Popover.Content>
          <Wrapper>
            <Popover.Close>
              <Button buttonLabel="Item 1" />
            </Popover.Close>
            <Popover.Close>
              <Button buttonLabel="Item 2" />
            </Popover.Close>
            <Popover.Close>
              <Button buttonLabel="Item 3" />
            </Popover.Close>
            <Popover.Close>
              <Button buttonLabel="Item 4" />
            </Popover.Close>
          </Wrapper>
        </Popover.Content>
      </Popover>
    );
  },
} satisfies Story;

export { DefaultPopover };
