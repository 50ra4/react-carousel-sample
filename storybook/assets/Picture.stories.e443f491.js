var c=Object.defineProperty;var t=(o,n)=>c(o,"name",{value:n,configurable:!0});import{H as r}from"./styled-components.browser.esm.48f8c355.js";import{P as a}from"./Picture.ff948d98.js";import{j as e}from"./jsx-runtime.0570b1b6.js";import"./iframe.e5eaa3f6.js";const s=r.div`
  max-width: 300px;
  max-height: 300px;
`,p=t((o,n)=>e(s,{children:e(o,{...n})}),"withStyleWrapper"),P={parameters:{storySource:{source:`import {
  ComponentMeta,
  ComponentStoryObj,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Picture } from './Picture';

const StyledWrapper = styled.div\`
  max-width: 300px;
  max-height: 300px;
\`;

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

const LetterBox = styled(Picture)\`
  width: 300px;
  height: 225px;
\`;

export const LetterBoxImage = () => <LetterBox {...args} />;

const PillarBox = styled(Picture)\`
  width: 400px;
  height: 200px;
\`;

export const PillarBoxImage = () => <PillarBox {...args} />;
`,locationsMap:{"letter-box-image":{startLoc:{col:30,line:44},endLoc:{col:59,line:44},startBody:{col:30,line:44},endBody:{col:59,line:44}},"pillar-box-image":{startLoc:{col:30,line:51},endLoc:{col:59,line:51},startBody:{col:30,line:51},endBody:{col:59,line:51}}}}},component:a,decorators:[p]},i={src:"images/sky_00009.jpg",caption:"sky image"},u={args:{...i}},l=r(a)`
  width: 300px;
  height: 225px;
`,B=t(()=>e(l,{...i}),"LetterBoxImage"),m=r(a)`
  width: 400px;
  height: 200px;
`,f=t(()=>e(m,{...i}),"PillarBoxImage"),S=["Main","LetterBoxImage","PillarBoxImage"];export{B as LetterBoxImage,u as Main,f as PillarBoxImage,S as __namedExportsOrder,P as default};
//# sourceMappingURL=Picture.stories.e443f491.js.map
