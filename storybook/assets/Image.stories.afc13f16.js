var p=Object.defineProperty;var t=(o,n)=>p(o,"name",{value:n,configurable:!0});import{H as r}from"./styled-components.browser.esm.f63de47c.js";import{I as a}from"./Image.08b113d0.js";import{j as e}from"./jsx-runtime.fed61fc8.js";import"./iframe.7a0652e4.js";const i=r.div`
  max-width: 300px;
  max-height: 300px;
`,c=t((o,n)=>e(i,{children:e(o,{...n})}),"withStyleWrapper"),I={parameters:{storySource:{source:`import {
  ComponentMeta,
  ComponentStoryObj,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';

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

const LetterBox = styled(Image)\`
  width: 300px;
  height: 225px;
\`;

export const LetterBoxImage = () => <LetterBox {...args} />;

const PillarBox = styled(Image)\`
  width: 225px;
  height: 225px;
\`;

export const PillarBoxImage = () => <PillarBox {...args} />;
`,locationsMap:{"letter-box-image":{startLoc:{col:30,line:44},endLoc:{col:59,line:44},startBody:{col:30,line:44},endBody:{col:59,line:44}},"pillar-box-image":{startLoc:{col:30,line:51},endLoc:{col:59,line:51},startBody:{col:30,line:51},endBody:{col:59,line:51}}}}},component:a,decorators:[c]},s={src:"images/sky_00009.jpg",caption:"sky image"},B={args:{...s}},m=r(a)`
  width: 300px;
  height: 225px;
`,f=t(()=>e(m,{...s}),"LetterBoxImage"),l=r(a)`
  width: 225px;
  height: 225px;
`,S=t(()=>e(l,{...s}),"PillarBoxImage"),L=["Main","LetterBoxImage","PillarBoxImage"];export{f as LetterBoxImage,B as Main,S as PillarBoxImage,L as __namedExportsOrder,I as default};
//# sourceMappingURL=Image.stories.afc13f16.js.map
