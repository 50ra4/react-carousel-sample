import {
  ComponentMeta,
  ComponentStoryObj,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';

const StyledWrapper = styled.div`
  max-width: 300px;
  max-height: 300px;
`;

const withStyleWrapper: DecoratorFn = (Story, context) => {
  return (
    <StyledWrapper>
      <Story {...context} />
    </StyledWrapper>
  );
};

export default {
  component: Image,
  decorators: [withStyleWrapper],
} as ComponentMeta<typeof Image>;

export const Main: ComponentStoryObj<typeof Image> = {
  args: {
    src: 'images/sky_00009.jpg',
    caption: 'sky image',
  },
};

const LetterBox = styled(Image)`
  width: 300px;
  height: 225px;
`;

export const LetterBoxImage = () => (
  <LetterBox src="images/sky_00009.jpg" caption="sky image" />
);

const PillarBox = styled(Image)`
  width: 225px;
  height: 225px;
`;

export const PillarBoxImage = () => (
  <PillarBox src="images/sky_00009.jpg" caption="sky image" />
);
