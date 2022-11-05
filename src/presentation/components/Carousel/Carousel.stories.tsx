import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import { Carousel, CarouselItem } from '@/components/Carousel/Carousel';

const withGlobalStyle: DecoratorFn = (Story, context) => {
  return (
    <div style={{ width: '600px' }}>
      <Story {...context} />
    </div>
  );
};

export default {
  component: Carousel,
  decorators: [withGlobalStyle],
} as ComponentMeta<typeof Carousel>;

const items: CarouselItem[] = Array.from({ length: 4 }).map((_, i) => ({
  key: `${i + 1}`,
  caption: `slide${i + 1}`,
}));

export const Main: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-main-story',
    items,
  },
};
