import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'parts/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  loading: false,
  disabled: false,
  onClick: action('action'),
  small: false,
  dark: true,
  block: false,
  children: 'Year!!'
};
