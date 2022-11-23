var L=Object.defineProperty;var i=(e,t)=>L(e,"name",{value:t,configurable:!0});import{H as c}from"./styled-components.browser.esm.ba2889cd.js";import{C as $}from"./CarouselSampleSlide.ab9ad62f.js";import{r,R as V,a as k,j as l}from"./jsx-runtime.9a4c052e.js";import{C as O}from"./CircleTriangleButton.9419a7b6.js";import{P as G}from"./Picture.5eb1a99a.js";import"./iframe.dfe99ef9.js";function q(e){const[t,u]=r.exports.useState(null),o=r.exports.useRef(0),d=r.exports.useCallback(p=>{p!==o.current&&(console.log(`current width: ${p}px`),u(p),o.current=p)},[]);return r.exports.useEffect(()=>{if(!e.current)return;const p=i(m=>{m.forEach(s=>{d(s.contentRect.width)})},"callback"),f=e.current,y=new ResizeObserver(p);return y.observe(f),()=>{y.unobserve(f)}},[e,d]),t}i(q,"useContentWidth");const N=i(e=>{var t,u;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(u=e.after)!=null?u:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeek"),w=i((e,t)=>`${e}_${t}`,"createSlideId"),Y=i(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex");function H(e,{total:t,carouselKey:u}){const[o,d]=r.exports.useState(new Set),p=Math.min(...Array.from(o));return r.exports.useEffect(()=>{if(!e.current)return;const f=i(s=>{d(h=>{const C=new Set(h);return s.forEach(v=>{const I=Y(v.target.id);v.intersectionRatio>.9?C.add(I):C.delete(I)}),C})},"callback"),y=new IntersectionObserver(f,{root:e.current,threshold:[0,.9,1]}),m=Array.from({length:t}).map((s,h)=>document.querySelector(`#${w(u,h)}`)).filter(s=>!!s);return m.forEach(s=>{y.observe(s)}),()=>{m.forEach(s=>{y.unobserve(s)})}},[u,t,e]),p}i(H,"useCurrentSlideIndex");function S({className:e,carouselKey:t,autoplay:u,perView:o,gap:d=0,peek:p,children:f}){const y=r.exports.useMemo(()=>N(p),[p]),m=r.exports.useRef(null),s=q(m),[{slideWidth:h,sliderPaddingRight:C,gapWidth:v},I]=r.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[j,E]=r.exports.useState(!1),_=r.exports.useCallback(n=>{const a=m.current;if(!a)return;const M=w(t,n),R=a.querySelector(`#${M}`);if(!R)return;const T=a.scrollLeft,K=a.getBoundingClientRect().left,W=R.getBoundingClientRect().left;a.scrollTo({left:T+W-K})},[t]),g=r.exports.useMemo(()=>V.Children.toArray(f).map((n,a)=>({child:n,slideId:w(t,a)})),[t,f]),x=H(m,{carouselKey:t,total:g.length}),B=r.exports.useCallback(()=>{const n=x===0?g.length-1:x-1;_(n)},[x,_,g.length]),P=r.exports.useCallback(()=>{const n=x===g.length-1?0:x+1;_(n)},[x,_,g.length]);return r.exports.useEffect(()=>{if(!u||j)return;const n=setInterval(()=>{P()},u);return()=>{clearInterval(n)}},[u,j,P]),r.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!s)return;const n=o>1?(o-1)*(d!=null?d:0):0,a=(s-n)/o;I({slideWidth:a,sliderPaddingRight:(o-1)*s,gapWidth:o>1?d:0})},[d,o,s]),k(F,{className:e,onMouseEnter:()=>{E(!0)},onMouseLeave:()=>{E(!1)},children:[k(X,{ref:m,gapWidth:v,peek:y,children:[g.map(({slideId:n,child:a})=>k(A,{id:n,width:h!=null?h:void 0,children:[a,l(D,{multipleSlide:!!o&&o>1})]},n)),!!C&&l(z,{inserted:C})]}),l(ee,{onClick:B,children:"Go to previous slide"}),l(te,{onClick:P,children:"Go to next slide"}),l(J,{children:l(Q,{children:g.map(({slideId:n},a)=>l(U,{children:k(Z,{isActive:x===a,onClick:()=>{_(a)},children:["Go to ",a+1," slide"]})},n))})})]})}i(S,"Carousel");const z=c.div`
  padding-left: ${({inserted:e})=>e}px;
`,D=c.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,A=c.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,F=c.div`
  position: relative;
  height: 100%;
`,X=c.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${A} + ${A} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
`,J=c.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,Q=c.ol`
  display: inline-block;
`,U=c.li`
  display: inline-block;
`,Z=c.button`
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
`,ee=c(O)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,te=c(O)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The distance value of the next and previous slider which have to peek in the current view. default: 0",name:"peek",required:!1,type:{name:"Peek"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:S.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ne=c.div`
  max-width: 600px;
  height: 450px;
`,re=i((e,t)=>l(ne,{children:l(e,{...t})}),"withStyleWrapper"),de={parameters:{storySource:{source:`import type {
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

export const PerView3: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-perview-3',
    children,
    perView: 3,
  },
};

export const Gap5: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-gap-5',
    children,
    perView: 3,
    gap: 5,
  },
};

export const PeekBefore20: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-peek-before-20',
    children,
    perView: 3,
    peek: { before: 20 },
  },
};
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:S,decorators:[re]},b=Array.from({length:4}).map((e,t)=>l($,{count:t+1},t)),me={args:{carouselKey:"carousel-main",children:b}},fe={args:{carouselKey:"carousel-auto-play",children:b,autoplay:3e3}},ye=i(()=>k(S,{carouselKey:"carousel-additional-children",children:[b,Array.from({length:4}).map((e,t)=>l($,{count:t+1+4},t))]}),"AdditionalChildren"),oe=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],he=i(()=>l(S,{carouselKey:"carousel-picture",children:oe.map(({src:e,caption:t})=>l(G,{src:e,caption:t},e))}),"PictureCarousel"),ge={args:{carouselKey:"carousel-perview-3",children:b,perView:3}},xe={args:{carouselKey:"carousel-gap-5",children:b,perView:3,gap:5}},Ce={args:{carouselKey:"carousel-peek-before-20",children:b,perView:3,peek:{before:20}}},Se=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20"];export{ye as AdditionalChildren,fe as AutoPlay,xe as Gap5,me as Main,Ce as PeekBefore20,ge as PerView3,he as PictureCarousel,Se as __namedExportsOrder,de as default};
//# sourceMappingURL=Carousel.stories.c0db3dd9.js.map
