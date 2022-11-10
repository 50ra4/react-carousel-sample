import {
  ComponentMeta,
  ComponentStoryObj,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Picture } from './Picture';

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
  component: Picture,
  decorators: [withStyleWrapper],
} as ComponentMeta<typeof Picture>;

const args: React.ComponentProps<typeof Picture> = {
  src: 'images/sky_00009.jpg',
  caption: 'sky image',
};

export const Main: ComponentStoryObj<typeof Picture> = {
  args: {
    ...args,
  },
};

const LetterBox = styled(Picture)`
  width: 300px;
  height: 225px;
`;

export const LetterBoxImage = () => <LetterBox {...args} />;

const PillarBox = styled(Picture)`
  width: 400px;
  height: 200px;
`;

export const PillarBoxImage = () => <PillarBox {...args} />;
