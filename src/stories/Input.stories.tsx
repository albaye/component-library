import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "../fields/Fields";

const meta: Meta = {
  title: "Example/Input",
  component: Field.Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ placeholder }) => (
    <Field>
      <Field.Label>Hello</Field.Label>
      <Field.Input placeholder={placeholder} />
    </Field>
  ),
  args: {
    placeholder: "Placeholder content",
  },
};
