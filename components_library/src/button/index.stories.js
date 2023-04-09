import Button from "./index.jsx";

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    type: 'primary',
    children: 'Button', 
  },
};

export const Basic = {
  args: {
    type: 'primary',
    children: 'Button',
  }
}

export const Secondary = {
  args: {
    type: 'secondary',
    children: 'Button',
  },
};

export const Large = {
  args: {
    type: "primary",
    size: 'lg',
    children: 'Button',
  },
};

export const Small = {
  args: {
    type: 'dashed',
    size: 'sm',
    children: 'Button',
  },
};
