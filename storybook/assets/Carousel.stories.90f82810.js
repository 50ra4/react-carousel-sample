var U=Object.defineProperty;var a=(e,n)=>U(e,"name",{value:n,configurable:!0});import{H as d}from"./styled-components.browser.esm.eeaa4396.js";import{C as q}from"./CarouselSampleSlide.970d624d.js";import{r as t,R as Z,a as k,j as l}from"./jsx-runtime.1974577a.js";import{C as W}from"./CircleTriangleButton.74a662d8.js";import{P as ee}from"./Picture.eb668a27.js";import"./iframe.fe9ce1c1.js";function ne(e){const[n,o]=t.exports.useState(null),r=t.exports.useRef(0),f=t.exports.useCallback(i=>{i!==r.current&&(console.log(`current width: ${i}px`),o(i),r.current=i)},[]);return t.exports.useEffect(()=>{if(!e.current)return;const i=a(g=>{g.forEach(x=>{f(x.contentRect.width)})},"callback"),y=e.current,h=new ResizeObserver(i);return h.observe(y),()=>{h.unobserve(y)}},[e,f]),n}a(ne,"useContentWidth");const te=a(e=>{var n,o;return typeof e=="object"?{before:(n=e.before)!=null?n:0,after:(o=e.after)!=null?o:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeek"),re=a(e=>{var n,o;return typeof e=="object"?{previous:(n=e.previous)!=null?n:!1,next:(o=e.next)!=null?o:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideNavigationOption"),K=a((e,n)=>`${e}_${n}`,"createSlideId"),oe=a(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),se=a((e,n)=>e.size===n.size&&Array.from(e).every(o=>n.has(o)),"isEqualSlideIndexes");function ae(e,{total:n,carouselKey:o}){const[r,f]=t.exports.useState(new Set),i=t.exports.useRef(r),y=Math.min(...Array.from(r));return t.exports.useEffect(()=>{if(!e.current)return;const h=a(u=>{const m=new Set(i.current);u.forEach(w=>{const C=oe(w.target.id);w.intersectionRatio>.9?m.add(C):m.delete(C)}),!se(m,i.current)&&(f(m),i.current=m)},"callback"),g=new IntersectionObserver(h,{root:e.current,threshold:[0,.9,1]}),x=Array.from({length:n}).map((u,m)=>document.querySelector(`#${K(o,m)}`)).filter(u=>!!u);return x.forEach(u=>{g.observe(u)}),()=>{x.forEach(u=>{g.unobserve(u)})}},[o,n,e]),{currentSlideIndex:y,isDisplayedLastSlide:r.has(n-1)}}a(ae,"useCurrentSlideIndex");function S({className:e,carouselKey:n,autoplay:o,perView:r,gap:f=0,peek:i,startAt:y,rewind:h=!0,bound:g,disabledIndicator:x,disabledSideNavigation:u,children:m}){const w=t.exports.useMemo(()=>te(i),[i]),C=t.exports.useMemo(()=>re(u),[u]),I=t.exports.useRef(null),A=ne(I),[{slideWidth:P,sliderPaddingRight:B,gapWidth:D},G]=t.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[E,O]=t.exports.useState(!1),b=t.exports.useCallback(c=>{const s=I.current;if(!s)return;const H=K(n,c),M=s.querySelector(`#${H}`);if(!M)return;const X=s.scrollLeft,J=s.getBoundingClientRect().left,Q=M.getBoundingClientRect().left;s.scrollTo({left:X+Q-J})},[n]),v=t.exports.useMemo(()=>Z.Children.toArray(m).map((c,s)=>({child:c,slideId:K(n,s)})),[n,m]),{currentSlideIndex:_,isDisplayedLastSlide:Y}=ae(I,{carouselKey:n,total:v.length}),$=_===0,z=h||!$,N=$?v.length-1:_-1,T=_===v.length-1||!!g&&Y,j=h||!T,L=T?0:_+1,F=t.exports.useCallback(()=>{b(N)},[N,b]),V=t.exports.useCallback(()=>{b(L)},[L,b]);return t.exports.useEffect(()=>{if(!o||E||!j)return;const c=setInterval(()=>{V()},o);return()=>{clearInterval(c)}},[o,j,E,V]),t.exports.useEffect(()=>{if(!r)return;if(r<1)throw new Error("perView must be 1 or more.");if(!A)return;const c=r>1?(r-1)*(f!=null?f:0):0,s=(A-c)/r;G({slideWidth:s,sliderPaddingRight:g?0:(r-1)*A,gapWidth:r>1?f:0})},[g,f,r,A]),t.exports.useEffect(()=>{!y||b(y)},[b,y]),k(ce,{className:e,onMouseEnter:()=>{O(!0)},onMouseLeave:()=>{O(!1)},children:[k(de,{ref:I,gapWidth:D,peek:w,children:[v.map(({slideId:c,child:s})=>k(R,{id:c,width:P!=null?P:void 0,children:[s,l(le,{multipleSlide:!!r&&r>1})]},c)),!!B&&l(ie,{inserted:B})]}),!C.previous&&z&&l(ye,{onClick:F,children:"Go to previous slide"}),!C.next&&j&&l(ge,{onClick:V,children:"Go to next slide"}),!x&&l(ue,{children:l(pe,{children:v.map(({slideId:c},s)=>l(fe,{children:k(me,{isActive:_===s,onClick:()=>{b(s)},children:["Go to ",s+1," slide"]})},c))})})]})}a(S,"Carousel");const ie=d.div`
  padding-left: ${({inserted:e})=>e}px;
`,le=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,R=d.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ce=d.div`
  position: relative;
  height: 100%;
`,de=d.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${R} + ${R} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:n}})=>!e&&!n?"0":`0 ${n}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:n}})=>!e&&!n?"0":`0 ${n}px 0 ${e}px`};
`,ue=d.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,pe=d.ol`
  display: inline-block;
`,fe=d.li`
  display: inline-block;
`,me=d.button`
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
`,ye=d(W)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ge=d(W)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"Peek"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideNavigation:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideNavigation",required:!1,type:{name:"SideNavigationOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:S.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const he=d.div`
  max-width: 600px;
  height: 450px;
`,be=a((e,n)=>l(he,{children:l(e,{...n})}),"withStyleWrapper"),Pe={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:S,decorators:[be]},p=Array.from({length:4}).map((e,n)=>l(q,{count:n+1},n)),je={args:{carouselKey:"carousel-main",children:p}},Ve={args:{carouselKey:"carousel-auto-play",children:p,autoplay:3e3}},Ke=a(()=>k(S,{carouselKey:"carousel-additional-children",children:[p,Array.from({length:4}).map((e,n)=>l(q,{count:n+1+4},n))]}),"AdditionalChildren"),xe=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Re=a(()=>l(S,{carouselKey:"carousel-picture",children:xe.map(({src:e,caption:n})=>l(ee,{src:e,caption:n},e))}),"PictureCarousel"),Be={args:{carouselKey:"carousel-perview-3",children:p,perView:3}},Ee={args:{carouselKey:"carousel-gap-5",children:p,perView:3,gap:5}},Oe={args:{carouselKey:"carousel-peek-before-20",children:p,perView:3,peek:{before:20}}},$e={args:{carouselKey:"carousel-disabled-indicator",children:p,perView:3,disabledIndicator:!0}},Ne={args:{carouselKey:"carousel-disabled-side-button",children:p,perView:3,disabledSideNavigation:!0}},Te={args:{carouselKey:"carousel-startAt",children:p,perView:3,startAt:1}},Le={args:{carouselKey:"carousel-no-rewind",children:p,perView:3,rewind:!1}},Me={args:{carouselKey:"carousel-bound",children:p,perView:3,bound:!0}},qe=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound"];export{Ke as AdditionalChildren,Ve as AutoPlay,Me as Bound,$e as DisabledIndicator,Ne as DisabledSideButton,Ee as Gap5,je as Main,Le as NoRewind,Oe as PeekBefore20,Be as PerView3,Re as PictureCarousel,Te as StartAt,qe as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Carousel.stories.90f82810.js.map
