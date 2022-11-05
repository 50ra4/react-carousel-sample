import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Carousel, CarouselItem } from '@/components/Carousel/Carousel';

const StyledWrapper = styled.div`
  max-width: 600px;
`;

const SlideItem = styled.div<{ even?: boolean }>`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({ even }) => (even ? '#99f' : '#f99')};
  counter-increment: item;

  &:before {
    content: counter(item);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -40%, 70px);
    color: #fff;
    font-size: 2em;
  }
`;

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

const SampleChildren = items.map(({ key }, i) => (
  <SlideItem key={key} even={i % 2 === 0} />
));

export const Main: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-main-story',
    children: SampleChildren,
  },
};

export const AutoPlay: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-auto-play-story',
    children: SampleChildren,
    options: {
      autoplay: 3000,
    },
  },
};
