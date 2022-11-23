var G=Object.defineProperty;var l=(e,t)=>G(e,"name",{value:t,configurable:!0});import{H as d}from"./styled-components.browser.esm.0a8ebc4e.js";import{C as K}from"./CarouselSampleSlide.0c6b5dde.js";import{r as n,R as D,a as I,j as c}from"./jsx-runtime.368ae1c4.js";import{C as R}from"./CircleTriangleButton.44cf09f7.js";import{P as Y}from"./Picture.a160cc9e.js";import"./iframe.f3f01edc.js";function H(e){const[t,a]=n.exports.useState(null),o=n.exports.useRef(0),p=n.exports.useCallback(u=>{u!==o.current&&(console.log(`current width: ${u}px`),a(u),o.current=u)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const u=l(g=>{g.forEach(i=>{p(i.contentRect.width)})},"callback"),m=e.current,y=new ResizeObserver(u);return y.observe(m),()=>{y.unobserve(m)}},[e,p]),t}l(H,"useContentWidth");const z=l(e=>{var t,a;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(a=e.after)!=null?a:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeek"),F=l(e=>{var t,a;return typeof e=="object"?{previous:(t=e.previous)!=null?t:!1,next:(a=e.next)!=null?a:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideNavigationOption"),P=l((e,t)=>`${e}_${t}`,"createSlideId"),X=l(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex");function J(e,{total:t,carouselKey:a}){const[o,p]=n.exports.useState(new Set),u=Math.min(...Array.from(o));return n.exports.useEffect(()=>{if(!e.current)return;const m=l(i=>{p(k=>{const v=new Set(k);return i.forEach(h=>{const b=X(h.target.id);h.intersectionRatio>.9?v.add(b):v.delete(b)}),v})},"callback"),y=new IntersectionObserver(m,{root:e.current,threshold:[0,.9,1]}),g=Array.from({length:t}).map((i,k)=>document.querySelector(`#${P(a,k)}`)).filter(i=>!!i);return g.forEach(i=>{y.observe(i)}),()=>{g.forEach(i=>{y.unobserve(i)})}},[a,t,e]),u}l(J,"useCurrentSlideIndex");function _({className:e,carouselKey:t,autoplay:a,perView:o,gap:p=0,peek:u,startAt:m,disabledIndicator:y,disabledSideNavigation:g,children:i}){const k=n.exports.useMemo(()=>z(u),[u]),v=n.exports.useMemo(()=>F(g),[g]),h=n.exports.useRef(null),b=H(h),[{slideWidth:w,sliderPaddingRight:E,gapWidth:$},M]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[O,V]=n.exports.useState(!1),x=n.exports.useCallback(r=>{const s=h.current;if(!s)return;const N=P(t,r),B=s.querySelector(`#${N}`);if(!B)return;const W=s.scrollLeft,L=s.getBoundingClientRect().left,q=B.getBoundingClientRect().left;s.scrollTo({left:W+q-L})},[t]),S=n.exports.useMemo(()=>D.Children.toArray(i).map((r,s)=>({child:r,slideId:P(t,s)})),[t,i]),C=J(h,{carouselKey:t,total:S.length}),T=n.exports.useCallback(()=>{const r=C===0?S.length-1:C-1;x(r)},[C,x,S.length]),A=n.exports.useCallback(()=>{const r=C===S.length-1?0:C+1;x(r)},[C,x,S.length]);return n.exports.useEffect(()=>{if(!a||O)return;const r=setInterval(()=>{A()},a);return()=>{clearInterval(r)}},[a,O,A]),n.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!b)return;const r=o>1?(o-1)*(p!=null?p:0):0,s=(b-r)/o;M({slideWidth:s,sliderPaddingRight:(o-1)*b,gapWidth:o>1?p:0})},[p,o,b]),n.exports.useEffect(()=>{!m||x(m)},[x,m]),I(Z,{className:e,onMouseEnter:()=>{V(!0)},onMouseLeave:()=>{V(!1)},children:[I(ee,{ref:h,gapWidth:$,peek:k,children:[S.map(({slideId:r,child:s})=>I(j,{id:r,width:w!=null?w:void 0,children:[s,c(U,{multipleSlide:!!o&&o>1})]},r)),!!E&&c(Q,{inserted:E})]}),!v.previous&&c(se,{onClick:T,children:"Go to previous slide"}),!v.next&&c(ae,{onClick:A,children:"Go to next slide"}),!y&&c(te,{children:c(ne,{children:S.map(({slideId:r},s)=>c(re,{children:I(oe,{isActive:C===s,onClick:()=>{x(s)},children:["Go to ",s+1," slide"]})},r))})})]})}l(_,"Carousel");const Q=d.div`
  padding-left: ${({inserted:e})=>e}px;
`,U=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,j=d.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,Z=d.div`
  position: relative;
  height: 100%;
`,ee=d.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${j} + ${j} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
`,te=d.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ne=d.ol`
  display: inline-block;
`,re=d.li`
  display: inline-block;
`,oe=d.button`
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
`,se=d(R)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ae=d(R)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{_.displayName="Carousel",_.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"Peek"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideNavigation:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideNavigation",required:!1,type:{name:"SideNavigationOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:_.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ie=d.div`
  max-width: 600px;
  height: 450px;
`,le=l((e,t)=>c(ie,{children:c(e,{...t})}),"withStyleWrapper"),he={parameters:{storySource:{source:`import type {
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

export const DisabledIndicator: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-disabled-indicator',
    children,
    perView: 3,
    disabledIndicator: true,
  },
};

export const DisabledSideButton: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-disabled-side-button',
    children,
    perView: 3,
    disabledSideNavigation: true,
  },
};

export const StartAt: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-startAt',
    children,
    perView: 3,
    startAt: 1,
  },
};
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:_,decorators:[le]},f=Array.from({length:4}).map((e,t)=>c(K,{count:t+1},t)),be={args:{carouselKey:"carousel-main",children:f}},xe={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},Se=l(()=>I(_,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>c(K,{count:t+1+4},t))]}),"AdditionalChildren"),ce=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Ce=l(()=>c(_,{carouselKey:"carousel-picture",children:ce.map(({src:e,caption:t})=>c(Y,{src:e,caption:t},e))}),"PictureCarousel"),ve={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},_e={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},ke={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},Ie={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},we={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledSideNavigation:!0}},Ae={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},Pe=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt"];export{Se as AdditionalChildren,xe as AutoPlay,Ie as DisabledIndicator,we as DisabledSideButton,_e as Gap5,be as Main,ke as PeekBefore20,ve as PerView3,Ce as PictureCarousel,Ae as StartAt,Pe as __namedExportsOrder,he as default};
//# sourceMappingURL=Carousel.stories.829ae09d.js.map
