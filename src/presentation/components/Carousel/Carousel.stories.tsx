import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Carousel, CarouselItem } from '@/components/Carousel/Carousel';

const withStyleWrapper: DecoratorFn = (Story, context) => {
  return (
    <StyledWrapper>
      <Story {...context} />
    </StyledWrapper>
  );
};

export default {
  component: Carousel,
  decorators: [withStyleWrapper],
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

export const AutoPlay: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-auto-play-story',
    items,
    options: {
      autoplay: 3000,
    },
  },
};

const StyledWrapper = styled.div`
  max-width: 600px;
`;
