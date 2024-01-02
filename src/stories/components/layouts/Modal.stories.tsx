import { Button, Modal } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

const meta = {
  component: Modal,
  title: "components/layouts/Modal",
  tags: ["autodocs"],
  argTypes: {
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

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
        <Modal.Background>
          <Modal.Content>
            <Wrapper>
              <Modal.Close>
                <Button buttonLabel="Close First" />
              </Modal.Close>
              <Modal.InsideTrigger>
                <Button buttonLabel="Open Modal Inside" />
              </Modal.InsideTrigger>
              <Modal.InsideBackground>
                <Modal.Content>
                  <Wrapper>
                    <Modal.InsideClose>
                      <Button buttonLabel="Close Inside" />
                    </Modal.InsideClose>
                  </Wrapper>
                </Modal.Content>
              </Modal.InsideBackground>
            </Wrapper>
          </Modal.Content>
        </Modal.Background>
      </Modal>
    );
  },
} satisfies Story;

export { DefaultModal };
