var Q=Object.defineProperty;var a=(e,t)=>Q(e,"name",{value:t,configurable:!0});import{H as p}from"./styled-components.browser.esm.fd8ab068.js";import{C as N}from"./CarouselSampleSlide.b6fc1502.js";import{r as n,R as U,a as I,j as l}from"./jsx-runtime.59c3bf4f.js";import{C as G}from"./CircleTriangleButton.2bd56531.js";import{P as Z}from"./Picture.5a6225ad.js";import"./iframe.e58f8c88.js";function ee(e){const[t,o]=n.exports.useState(null),r=n.exports.useRef(0),c=n.exports.useCallback(i=>{i!==r.current&&(console.log(`current width: ${i}px`),o(i),r.current=i)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const i=a(m=>{m.forEach(d=>{c(d.contentRect.width)})},"callback"),g=e.current,b=new ResizeObserver(i);return b.observe(g),()=>{b.unobserve(g)}},[e,c]),t}a(ee,"useContentWidth");const te=a(e=>{var t,o;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(o=e.after)!=null?o:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeekOption"),ne=a(e=>{var t,o;return typeof e=="object"?{previous:(t=e.previous)!=null?t:!1,next:(o=e.next)!=null?o:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideButtonOption"),O=a((e,t)=>`${e}_${t}`,"createSlideId"),re=a(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),oe=a((e,t)=>e.size===t.size&&Array.from(e).every(o=>t.has(o)),"isEqualSlideIndexes");function se(e,{total:t,carouselKey:o}){const[r,c]=n.exports.useState(new Set),i=n.exports.useRef(r),g=Math.min(...Array.from(r));return n.exports.useEffect(()=>{if(!e.current)return;const b=a(y=>{const h=new Set(i.current);y.forEach(w=>{const v=re(w.target.id);w.intersectionRatio>.9?h.add(v):h.delete(v)}),!oe(h,i.current)&&(c(h),i.current=h)},"callback"),m=new IntersectionObserver(b,{root:e.current,threshold:[0,.9,1]}),d=Array.from({length:t}).map((y,h)=>document.querySelector(`#${O(o,h)}`)).filter(y=>!!y);return d.forEach(y=>{m.observe(y)}),()=>{d.forEach(y=>{m.unobserve(y)})}},[o,t,e]),{currentSlideIndex:g,isDisplayedLastSlide:r.has(t-1)}}a(se,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:o,perView:r,gap:c=0,peek:i,startAt:g,rewind:b=!0,bound:m,slideWidth:d,disabledIndicator:y,disabledSideButton:h,children:w}){const v=n.exports.useMemo(()=>te(i),[i]),K=n.exports.useMemo(()=>ne(h),[h]),P=n.exports.useRef(null),S=ee(P),[A,R]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[W,$]=n.exports.useState(!1),x=n.exports.useCallback(u=>{const s=P.current;if(!s)return;const B=O(t,u),D=s.querySelector(`#${B}`);if(!D)return;const F=s.scrollLeft,X=s.getBoundingClientRect().left,J=D.getBoundingClientRect().left;s.scrollTo({left:F+J-X})},[t]),_=n.exports.useMemo(()=>U.Children.toArray(w).map((u,s)=>({child:u,slideId:O(t,s)})),[t,w]),{currentSlideIndex:k,isDisplayedLastSlide:H}=se(P,{carouselKey:t,total:_.length}),T=k===0,Y=b||!T,L=T?_.length-1:k-1,q=k===_.length-1||!!m&&H,j=b||!q,M=q?0:k+1,z=n.exports.useCallback(()=>{x(L)},[L,x]),V=n.exports.useCallback(()=>{x(M)},[M,x]);return n.exports.useEffect(()=>{if(!o||W||!j)return;const u=setInterval(()=>{V()},o);return()=>{clearInterval(u)}},[o,j,W,V]),n.exports.useEffect(()=>{if(!(!r||!d))throw new Error("both perView and slideWidth cannot be set.")},[r,d]),n.exports.useEffect(()=>{if(!r)return;if(r<1)throw new Error("perView must be 1 or more.");if(!S)return;const u=r>1?(r-1)*(c!=null?c:0):0,s=(S-u)/r;R({slideWidth:s,sliderPaddingRight:m?0:(r-1)*S,gapWidth:r>1?c:0,multipleSlide:r>1})},[m,c,r,S]),n.exports.useEffect(()=>{!d||!S||R({slideWidth:d,sliderPaddingRight:m?0:S-d,gapWidth:c,multipleSlide:S>d})},[m,c,d,S]),n.exports.useEffect(()=>{!g||x(g)},[x,g]),I(le,{className:e,onMouseEnter:()=>{$(!0)},onMouseLeave:()=>{$(!1)},children:[I(ce,{ref:P,gapWidth:A.gapWidth,peek:v,children:[_.map(({slideId:u,child:s})=>{var B;return I(E,{id:u,width:(B=A.slideWidth)!=null?B:void 0,children:[s,l(ie,{multipleSlide:!!A.multipleSlide})]},u)}),l(ae,{inserted:A.sliderPaddingRight||v.after})]}),!K.previous&&Y&&l(me,{onClick:z,children:"Go to previous slide"}),!K.next&&j&&l(ye,{onClick:V,children:"Go to next slide"}),!y&&l(de,{children:l(ue,{children:_.map(({slideId:u},s)=>l(pe,{children:I(fe,{isActive:k===s,onClick:()=>{x(s)},children:["Go to ",s+1," slide"]})},u))})})]})}a(C,"Carousel");const ae=p.div`
  padding-left: ${({inserted:e})=>e}px;
`,ie=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,E=p.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,le=p.div`
  position: relative;
  height: 100%;
`,ce=p.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${E} + ${E} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
`,de=p.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ue=p.ol`
  display: inline-block;
`,pe=p.li`
  display: inline-block;
`,fe=p.button`
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
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.2));
`,me=p(G)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ye=p(G)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideButton:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideButton",required:!1,type:{name:"SideButtonOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const he=p.div`
  max-width: 600px;
  height: 450px;
`,ge=a((e,t)=>l(he,{children:l(e,{...t})}),"withStyleWrapper"),Pe={parameters:{storySource:{source:`import type {
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
    disabledSideButton: true,
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

export const NoRewind: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-no-rewind',
    children,
    perView: 3,
    rewind: false,
  },
};

export const Bound: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-bound',
    children,
    perView: 3,
    bound: true,
  },
};

export const SlideWidth145: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-slide-width-140',
    children,
    slideWidth: 640,
    gap: 1,
  },
};
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[ge]},f=Array.from({length:4}).map((e,t)=>l(N,{count:t+1},t)),Ae={args:{carouselKey:"carousel-main",children:f}},Be={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},je=a(()=>I(C,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>l(N,{count:t+1+4},t))]}),"AdditionalChildren"),Se=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Ve=a(()=>l(C,{carouselKey:"carousel-picture",children:Se.map(({src:e,caption:t})=>l(Z,{src:e,caption:t},e))}),"PictureCarousel"),Oe={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},Ee={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},Ke={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},Re={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},We={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledSideButton:!0}},$e={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},Te={args:{carouselKey:"carousel-no-rewind",children:f,perView:3,rewind:!1}},Le={args:{carouselKey:"carousel-bound",children:f,perView:3,bound:!0}},qe={args:{carouselKey:"carousel-slide-width-140",children:f,slideWidth:640,gap:1}},Me=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{je as AdditionalChildren,Be as AutoPlay,Le as Bound,Re as DisabledIndicator,We as DisabledSideButton,Ee as Gap5,Ae as Main,Te as NoRewind,Ke as PeekBefore20,Oe as PerView3,Ve as PictureCarousel,qe as SlideWidth145,$e as StartAt,Me as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Carousel.stories.1f06960e.js.map
