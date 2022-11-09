var p=Object.defineProperty;var t=(o,n)=>p(o,"name",{value:n,configurable:!0});import{H as r}from"./styled-components.browser.esm.2f3189aa.js";import{I as a}from"./Image.ff512634.js";import{j as e}from"./jsx-runtime.74e17f5d.js";import"./iframe.30b03abf.js";const i=r.div`
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
  width: 400px;
  height: 200px;
\`;

export const PillarBoxImage = () => <PillarBox {...args} />;
`,locationsMap:{"letter-box-image":{startLoc:{col:30,line:44},endLoc:{col:59,line:44},startBody:{col:30,line:44},endBody:{col:59,line:44}},"pillar-box-image":{startLoc:{col:30,line:51},endLoc:{col:59,line:51},startBody:{col:30,line:51},endBody:{col:59,line:51}}}}},component:a,decorators:[c]},s={src:"images/sky_00009.jpg",caption:"sky image"},B={args:{...s}},m=r(a)`
  width: 300px;
  height: 225px;
`,f=t(()=>e(m,{...s}),"LetterBoxImage"),l=r(a)`
  width: 400px;
  height: 200px;
`,S=t(()=>e(l,{...s}),"PillarBoxImage"),L=["Main","LetterBoxImage","PillarBoxImage"];export{f as LetterBoxImage,B as Main,S as PillarBoxImage,L as __namedExportsOrder,I as default};
//# sourceMappingURL=Image.stories.2b532e61.js.map
