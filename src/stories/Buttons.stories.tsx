import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  render: (args) => <Button {...args}>This is my button text</Button>,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    disabled: false,
    isFullWidth: false,
    size: "small",
  },
};
