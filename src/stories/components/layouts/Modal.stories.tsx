import { Button, Modal } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

const meta = {
  component: Modal,
  title: "components/layouts/Modal",
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

const DefaultModal = {
  render: () => {
    const Wrapper = styled.div`
      width: 300px;
      height: 300px;
      background-color: #eaeaea;
    `;
    return (
      <Modal>
        <Modal.Trigger>
          <Button buttonLabel="Open Modal" />
        </Modal.Trigger>
        <Modal.Content isCancelable={true}>
          <Wrapper>
            <Modal.Close>
              <Button buttonLabel="Close Modal" />
            </Modal.Close>
          </Wrapper>
        </Modal.Content>
      </Modal>
    );
  },
} satisfies Story;

export { DefaultModal };
