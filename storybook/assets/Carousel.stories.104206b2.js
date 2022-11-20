var B=Object.defineProperty;var c=(e,t)=>B(e,"name",{value:t,configurable:!0});import{H as a}from"./styled-components.browser.esm.27c72978.js";import{C as I}from"./CarouselSampleSlide.eaf930d2.js";import{r as l,R as L,a as g,j as r}from"./jsx-runtime.9084ae55.js";import{C as v}from"./CircleTriangleButton.4a060751.js";import{P as M}from"./Picture.b687dcef.js";import"./iframe.ea478414.js";const b=c((e,t)=>`${e}_${t}`,"createSlideId"),O=c(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex");function u({className:e,carouselKey:t,autoplay:h,children:S}){const[p,A]=l.exports.useState(0),m=l.exports.useRef(null),d=l.exports.useCallback(o=>{const n=m.current;if(!n)return;const y=b(t,o),s=n.querySelector(`#${y}`);if(!s)return;const f=n.scrollLeft,E=n.getBoundingClientRect().left,P=s.getBoundingClientRect().left;n.scrollTo({left:f+P-E})},[t]),i=l.exports.useMemo(()=>L.Children.toArray(S).map((o,n)=>({child:o,slideId:b(t,n)})),[t,S]),j=l.exports.useCallback(()=>{const o=p===0?i.length-1:p-1;d(o)},[p,d,i.length]),C=l.exports.useCallback(()=>{const o=p===i.length-1?0:p+1;d(o)},[p,d,i.length]);l.exports.useEffect(()=>{if(!m.current)return;const o=c(s=>{s.forEach(f=>{!f.isIntersecting||A(O(f.target.id))})},"callback"),n=new IntersectionObserver(o,{root:m.current,threshold:1}),y=i.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return y.forEach(s=>{n.observe(s)}),()=>{y.forEach(s=>{n.unobserve(s)})}},[i]);const[_,k]=l.exports.useState(!1);return l.exports.useEffect(()=>{if(!h||_)return;const o=setInterval(()=>{C()},h);return()=>{clearInterval(o)}},[h,_,C]),g(w,{className:e,onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)},children:[r(K,{ref:m,children:i.map(({slideId:o,child:n})=>g(T,{id:o,children:[n,r(R,{})]},o))}),r(Y,{onClick:j,children:"Go to previous slide"}),r($,{onClick:C,children:"Go to next slide"}),r(W,{children:r(G,{children:i.map(({slideId:o},n)=>r(N,{children:g(q,{isActive:p===n,onClick:()=>{d(n)},children:["Go to ",n+1," slide"]})},o))})})]})}c(u,"Carousel");const R=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,T=a.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,w=a.div`
  position: relative;
  height: 100%;
`,K=a.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,W=a.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,G=a.ol`
  display: inline-block;
`,N=a.li`
  display: inline-block;
`,q=a.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:e})=>e?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px;
  font-size: 0;
  transition: transform 0.1s;
`,Y=a(v)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,$=a(v)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{u.displayName="Carousel",u.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:u.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const H=a.div`
  max-width: 600px;
  height: 450px;
`,V=c((e,t)=>r(H,{children:r(e,{...t})}),"withStyleWrapper"),ee={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { CarouselSampleSlide } from './CarouselSampleSlide';
import { Carousel } from '@/components/Carousel/Carousel';
import { Picture } from '@/components/Picture/Picture';

const StyledWrapper = styled.div\`
  max-width: 600px;
  height: 450px;
\`;

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

const children = Array.from({ length: 4 }).map((_, i) => (
  <CarouselSampleSlide key={i} count={i + 1} />
));

export const Main: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-main',
    children,
  },
};

export const AutoPlay: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-auto-play',
    children,
    autoplay: 3000,
  },
};

export const AdditionalChildren = () => (
  <Carousel carouselKey="carousel-additional-children">
    {children}
    {Array.from({ length: 4 }).map((_, i) => (
      <CarouselSampleSlide key={i} count={i + 1 + 4} />
    ))}
  </Carousel>
);

const IMAGE_LIST = [
  { src: 'images/sky_00009.jpg', caption: 'sky_00009' },
  { src: 'images/sky_00023.jpg', caption: 'sky_00023' },
  { src: 'images/sky_00036.jpg', caption: 'sky_00036' },
  { src: 'images/sky_00037.jpg', caption: 'sky_00037' },
  { src: 'images/sky_00200.jpg', caption: 'sky_00200' },
];

export const PictureCarousel = () => (
  <Carousel carouselKey="carousel-picture">
    {IMAGE_LIST.map(({ src, caption }) => (
      <Picture key={src} src={src} caption={caption} />
    ))}
  </Carousel>
);
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:u,decorators:[V]},x=Array.from({length:4}).map((e,t)=>r(I,{count:t+1},t)),te={args:{carouselKey:"carousel-main",children:x}},oe={args:{carouselKey:"carousel-auto-play",children:x,autoplay:3e3}},ne=c(()=>g(u,{carouselKey:"carousel-additional-children",children:[x,Array.from({length:4}).map((e,t)=>r(I,{count:t+1+4},t))]}),"AdditionalChildren"),D=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],re=c(()=>r(u,{carouselKey:"carousel-picture",children:D.map(({src:e,caption:t})=>r(M,{src:e,caption:t},e))}),"PictureCarousel"),se=["Main","AutoPlay","AdditionalChildren","PictureCarousel"];export{ne as AdditionalChildren,oe as AutoPlay,te as Main,re as PictureCarousel,se as __namedExportsOrder,ee as default};
//# sourceMappingURL=Carousel.stories.104206b2.js.map
