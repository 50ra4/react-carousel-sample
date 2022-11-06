import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { CircleTriangleButton } from './CircleTriangleButton';

export default {
  component: CircleTriangleButton,
} as ComponentMeta<typeof CircleTriangleButton>;

export const Main: ComponentStoryObj<typeof CircleTriangleButton> = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
    children: 'sample main',
  },
};
