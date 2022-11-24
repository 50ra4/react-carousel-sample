var U=Object.defineProperty;var a=(e,n)=>U(e,"name",{value:n,configurable:!0});import{H as u}from"./styled-components.browser.esm.9df5034a.js";import{C as q}from"./CarouselSampleSlide.a80f179c.js";import{r as t,R as Z,a as w,j as i}from"./jsx-runtime.13c4be60.js";import{C as W}from"./CircleTriangleButton.4ad53677.js";import{P as ee}from"./Picture.1b55389a.js";import"./iframe.12525872.js";function ne(e){const[n,o]=t.exports.useState(null),r=t.exports.useRef(0),f=t.exports.useCallback(l=>{l!==r.current&&(console.log(`current width: ${l}px`),o(l),r.current=l)},[]);return t.exports.useEffect(()=>{if(!e.current)return;const l=a(h=>{h.forEach(x=>{f(x.contentRect.width)})},"callback"),y=e.current,g=new ResizeObserver(l);return g.observe(y),()=>{g.unobserve(y)}},[e,f]),n}a(ne,"useContentWidth");const te=a(e=>{var n,o;return typeof e=="object"?{before:(n=e.before)!=null?n:0,after:(o=e.after)!=null?o:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeekOption"),re=a(e=>{var n,o;return typeof e=="object"?{previous:(n=e.previous)!=null?n:!1,next:(o=e.next)!=null?o:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideButtonOption"),V=a((e,n)=>`${e}_${n}`,"createSlideId"),oe=a(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),se=a((e,n)=>e.size===n.size&&Array.from(e).every(o=>n.has(o)),"isEqualSlideIndexes");function ae(e,{total:n,carouselKey:o}){const[r,f]=t.exports.useState(new Set),l=t.exports.useRef(r),y=Math.min(...Array.from(r));return t.exports.useEffect(()=>{if(!e.current)return;const g=a(d=>{const m=new Set(l.current);d.forEach(C=>{const _=oe(C.target.id);C.intersectionRatio>.9?m.add(_):m.delete(_)}),!se(m,l.current)&&(f(m),l.current=m)},"callback"),h=new IntersectionObserver(g,{root:e.current,threshold:[0,.9,1]}),x=Array.from({length:n}).map((d,m)=>document.querySelector(`#${V(o,m)}`)).filter(d=>!!d);return x.forEach(d=>{h.observe(d)}),()=>{x.forEach(d=>{h.unobserve(d)})}},[o,n,e]),{currentSlideIndex:y,isDisplayedLastSlide:r.has(n-1)}}a(ae,"useCurrentSlideIndex");function S({className:e,carouselKey:n,autoplay:o,perView:r,gap:f=0,peek:l,startAt:y,rewind:g=!0,bound:h,disabledIndicator:x,disabledSideButton:d,children:m}){const C=t.exports.useMemo(()=>te(l),[l]),_=t.exports.useMemo(()=>re(d),[d]),I=t.exports.useRef(null),A=ne(I),[{slideWidth:B,sliderPaddingRight:D,gapWidth:N},G]=t.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[K,R]=t.exports.useState(!1),b=t.exports.useCallback(c=>{const s=I.current;if(!s)return;const H=V(n,c),M=s.querySelector(`#${H}`);if(!M)return;const X=s.scrollLeft,J=s.getBoundingClientRect().left,Q=M.getBoundingClientRect().left;s.scrollTo({left:X+Q-J})},[n]),v=t.exports.useMemo(()=>Z.Children.toArray(m).map((c,s)=>({child:c,slideId:V(n,s)})),[n,m]),{currentSlideIndex:k,isDisplayedLastSlide:Y}=ae(I,{carouselKey:n,total:v.length}),E=k===0,z=g||!E,$=E?v.length-1:k-1,T=k===v.length-1||!!h&&Y,P=g||!T,L=T?0:k+1,F=t.exports.useCallback(()=>{b($)},[$,b]),j=t.exports.useCallback(()=>{b(L)},[L,b]);return t.exports.useEffect(()=>{if(!o||K||!P)return;const c=setInterval(()=>{j()},o);return()=>{clearInterval(c)}},[o,P,K,j]),t.exports.useEffect(()=>{if(!r)return;if(r<1)throw new Error("perView must be 1 or more.");if(!A)return;const c=r>1?(r-1)*(f!=null?f:0):0,s=(A-c)/r;G({slideWidth:s,sliderPaddingRight:h?0:(r-1)*A,gapWidth:r>1?f:0})},[h,f,r,A]),t.exports.useEffect(()=>{!y||b(y)},[b,y]),w(ce,{className:e,onMouseEnter:()=>{R(!0)},onMouseLeave:()=>{R(!1)},children:[w(ue,{ref:I,gapWidth:N,peek:C,children:[v.map(({slideId:c,child:s})=>w(O,{id:c,width:B!=null?B:void 0,children:[s,i(ie,{multipleSlide:!!r&&r>1})]},c)),i(le,{inserted:D||C.after})]}),!_.previous&&z&&i(ye,{onClick:F,children:"Go to previous slide"}),!_.next&&P&&i(he,{onClick:j,children:"Go to next slide"}),!x&&i(de,{children:i(pe,{children:v.map(({slideId:c},s)=>i(fe,{children:w(me,{isActive:k===s,onClick:()=>{b(s)},children:["Go to ",s+1," slide"]})},c))})})]})}a(S,"Carousel");const le=u.div`
  padding-left: ${({inserted:e})=>e}px;
`,ie=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,O=u.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ce=u.div`
  position: relative;
  height: 100%;
`,ue=u.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${O} + ${O} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:n}})=>!e&&!n?"0":`0 ${n}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:n}})=>!e&&!n?"0":`0 ${n}px 0 ${e}px`};
`,de=u.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,pe=u.ol`
  display: inline-block;
`,fe=u.li`
  display: inline-block;
`,me=u.button`
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
`,ye=u(W)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,he=u(W)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideButton:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideButton",required:!1,type:{name:"SideButtonOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:S.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ge=u.div`
  max-width: 600px;
  height: 450px;
`,be=a((e,n)=>i(ge,{children:i(e,{...n})}),"withStyleWrapper"),Be={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:S,decorators:[be]},p=Array.from({length:4}).map((e,n)=>i(q,{count:n+1},n)),Pe={args:{carouselKey:"carousel-main",children:p}},je={args:{carouselKey:"carousel-auto-play",children:p,autoplay:3e3}},Ve=a(()=>w(S,{carouselKey:"carousel-additional-children",children:[p,Array.from({length:4}).map((e,n)=>i(q,{count:n+1+4},n))]}),"AdditionalChildren"),xe=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Oe=a(()=>i(S,{carouselKey:"carousel-picture",children:xe.map(({src:e,caption:n})=>i(ee,{src:e,caption:n},e))}),"PictureCarousel"),Ke={args:{carouselKey:"carousel-perview-3",children:p,perView:3}},Re={args:{carouselKey:"carousel-gap-5",children:p,perView:3,gap:5}},Ee={args:{carouselKey:"carousel-peek-before-20",children:p,perView:3,peek:{before:20}}},$e={args:{carouselKey:"carousel-disabled-indicator",children:p,perView:3,disabledIndicator:!0}},Te={args:{carouselKey:"carousel-disabled-side-button",children:p,perView:3,disabledSideButton:!0}},Le={args:{carouselKey:"carousel-startAt",children:p,perView:3,startAt:1}},Me={args:{carouselKey:"carousel-no-rewind",children:p,perView:3,rewind:!1}},qe={args:{carouselKey:"carousel-bound",children:p,perView:3,bound:!0}},We=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound"];export{Ve as AdditionalChildren,je as AutoPlay,qe as Bound,$e as DisabledIndicator,Te as DisabledSideButton,Re as Gap5,Pe as Main,Me as NoRewind,Ee as PeekBefore20,Ke as PerView3,Oe as PictureCarousel,Le as StartAt,We as __namedExportsOrder,Be as default};
//# sourceMappingURL=Carousel.stories.722b53fc.js.map
