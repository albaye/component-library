import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../fields/Fields";

const meta: Meta<typeof Field.Textarea> = {
  title: "Example/Textarea",
  component: Field.Textarea,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Field>
      <Field.Label>Hello</Field.Label>
      <Field.Textarea placeholder="Custom TextArea" {...args} />
    </Field>
  ),
  args: {
    placeholder: "Text area Placeholder content",
    isResizable: false,
  },
};
