import React from 'react';
import { Loader } from './Loader';
export default {
  title: 'Example/Button',
  component: Loader
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const showLoader = () => <Loader />;

export const Default = showLoader.bind({});
