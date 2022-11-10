var E=Object.defineProperty;var c=(t,e)=>E(t,"name",{value:e,configurable:!0});import{H as l}from"./styled-components.browser.esm.7ba4bdb4.js";import{C as b}from"./CarouselSampleSlide.723a76f9.js";import{r as p,R as P,a as g,j as s}from"./jsx-runtime.259f2320.js";import{C as v}from"./CircleTriangleButton.0e324ad3.js";import{P as B}from"./Picture.430408e2.js";import"./iframe.16bb92ce.js";const f=c((t,e)=>`${t}_${e}`,"createSlideId"),I=c((t,e)=>e===t-1?0:e+1,"getNextSlideIndex"),L=c((t,e)=>e===0?t-1:e-1,"getPrevSlideIndex");function d({className:t,carouselKey:e,autoplay:h,children:_}){const m=p.exports.useRef(null),u=p.exports.useCallback(n=>{const o=m.current;if(!o)return;const a=o.querySelector(`#${n}`);if(!a)return;const r=o.scrollLeft,y=o.getBoundingClientRect().left,j=a.getBoundingClientRect().left;o.scrollTo({left:r+j-y})},[]),i=p.exports.useMemo(()=>P.Children.toArray(_).map((n,o)=>({child:n,slideId:f(e,o)})),[e,_]),[C,A]=p.exports.useState(i[0].slideId);p.exports.useEffect(()=>{if(!m.current)return;const n=c(r=>{r.forEach(y=>{!y.isIntersecting||A(y.target.id)})},"callback"),o=new IntersectionObserver(n,{root:m.current,threshold:1}),a=i.map(({slideId:r})=>document.querySelector(`#${r}`)).filter(r=>!!r);return a.forEach(r=>{o.observe(r)}),()=>{a.forEach(r=>{o.unobserve(r)})}},[e,i]);const[x,k]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!h||x)return;const n=i.findIndex(a=>a.slideId===C);if(n<0)return;const o=setInterval(()=>{const a=f(e,I(i.length,n));u(a)},h);return()=>{clearInterval(o)}},[h,e,C,x,u,i]),g(w,{className:t,onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)},children:[s(O,{ref:m,children:i.map(({slideId:n,child:o},a)=>g(R,{id:n,children:[o,s(M,{}),s(N,{onClick:()=>{const r=f(e,L(i.length,a));u(r)},children:"Go to previous slide"}),s(q,{onClick:()=>{const r=f(e,I(i.length,a));u(r)},children:"Go to next slide"})]},n))}),s(T,{children:s(W,{children:i.map(({slideId:n},o)=>s(G,{children:g(K,{isActive:C===n,onClick:()=>{u(n)},children:["Go to ",o+1," slide"]})},n))})})]})}c(d,"Carousel");const M=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,R=l.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,w=l.div`
  position: relative;
  height: 100%;
`,O=l.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,T=l.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,W=l.ol`
  display: inline-block;
`,G=l.li`
  display: inline-block;
`,K=l.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:t})=>t?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px;
  font-size: 0;
  transition: transform 0.1s;
`,N=l(v)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,q=l(v)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{d.displayName="Carousel",d.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:d.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const Y=l.div`
  max-width: 600px;
  height: 450px;
`,$=c((t,e)=>s(Y,{children:s(t,{...e})}),"withStyleWrapper"),U={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:d,decorators:[$]},S=Array.from({length:4}).map((t,e)=>s(b,{count:e+1},e)),Z={args:{carouselKey:"carousel-main",children:S}},ee={args:{carouselKey:"carousel-auto-play",children:S,autoplay:3e3}},te=c(()=>g(d,{carouselKey:"carousel-additional-children",children:[S,Array.from({length:4}).map((t,e)=>s(b,{count:e+1+4},e))]}),"AdditionalChildren"),H=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],oe=c(()=>s(d,{carouselKey:"carousel-picture",children:H.map(({src:t,caption:e})=>s(B,{src:t,caption:e},t))}),"PictureCarousel"),ne=["Main","AutoPlay","AdditionalChildren","PictureCarousel"];export{te as AdditionalChildren,ee as AutoPlay,Z as Main,oe as PictureCarousel,ne as __namedExportsOrder,U as default};
//# sourceMappingURL=Carousel.stories.287bab2a.js.map
