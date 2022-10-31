import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Carousel } from '@/components/Carousel/Carousel';

export default {
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Main: ComponentStoryObj<typeof Carousel> = {
  args: {},
};
