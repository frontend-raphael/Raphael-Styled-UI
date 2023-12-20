import { Button, Dropdown } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Dropdown,
  title: "components/layouts/Dropdown",
  tags: ["autodocs"],
  argTypes: {
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

const DefaultDropdown = {
  render: () => {
    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Button buttonLabel="OUT TRIGGER" />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>
            <Button buttonLabel="Item 1" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 2" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 3" />
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Sub>
            <Dropdown.SubTrigger>
              <Button buttonLabel="SUB TRIGGER" />
            </Dropdown.SubTrigger>
            <Dropdown.SubContent>
              <Dropdown.SubItem>
                <Button buttonLabel="SUB Item 1" />
              </Dropdown.SubItem>
              <Dropdown.SubItem>
                <Button buttonLabel="SUB Item 2" />
              </Dropdown.SubItem>
              <Dropdown.SubItem>
                <Button buttonLabel="SUB Item 3" />
              </Dropdown.SubItem>
              <Dropdown.SubItem>
                <Button buttonLabel="SUB Item 4" />
              </Dropdown.SubItem>
            </Dropdown.SubContent>
          </Dropdown.Sub>
          <Dropdown.Item>
            <Button buttonLabel="Item 4" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 5" />
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>
            <Button buttonLabel="Item 1" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 2" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 3" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 1" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 2" />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button buttonLabel="Item 3" />
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
  },
} satisfies Story;

export { DefaultDropdown };
