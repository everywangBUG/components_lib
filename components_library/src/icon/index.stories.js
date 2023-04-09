import Icon from ".";

export default {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const StepBack = {
  args: {
    type: 'stepBack',
    children: 'Icon'
  },
};

export const StepForward = {
  args: {
    type: 'stepForward',
    children: 'Icon'
  },
};

export const SettingIcon = {
  args: {
    type: 'settingIcon',
    children: 'Icon'
  }
}