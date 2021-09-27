import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from './Loader';

export default {
  title: 'parts/Loader',
  component: Loader,
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
