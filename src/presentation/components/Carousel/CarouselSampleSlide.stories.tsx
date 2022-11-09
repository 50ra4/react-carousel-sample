import {
  ComponentMeta,
  ComponentStoryObj,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import { CarouselSampleSlide } from './CarouselSampleSlide';

const withStyleWrapper: DecoratorFn = (Story, context) => {
  return (
    <div style={{ width: '300px', height: '200px' }}>
      <Story {...context} />
    </div>
  );
};

export default {
  component: CarouselSampleSlide,
  decorators: [withStyleWrapper],
} as ComponentMeta<typeof CarouselSampleSlide>;

export const Main: ComponentStoryObj<typeof CarouselSampleSlide> = {
  args: {
    count: 1,
  },
};
