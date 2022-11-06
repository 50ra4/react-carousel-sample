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

const args: React.ComponentProps<typeof Image> = {
  src: 'images/sky_00009.jpg',
  caption: 'sky image',
};

export const Main: ComponentStoryObj<typeof Image> = {
  args: {
    ...args,
  },
};

const LetterBox = styled(Image)`
  width: 300px;
  height: 225px;
`;

export const LetterBoxImage = () => <LetterBox {...args} />;

const PillarBox = styled(Image)`
  width: 225px;
  height: 225px;
`;

export const PillarBoxImage = () => <PillarBox {...args} />;
