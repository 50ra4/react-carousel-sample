var J=Object.defineProperty;var a=(e,t)=>J(e,"name",{value:t,configurable:!0});import{H as d}from"./styled-components.browser.esm.d2fb65a5.js";import{C as q}from"./CarouselSampleSlide.d9ae14b5.js";import{r as n,R as Q,a as w,j as l}from"./jsx-runtime.b67fa51a.js";import{C as L}from"./CircleTriangleButton.961b4077.js";import{P as U}from"./Picture.09947977.js";import"./iframe.1ceae1f9.js";function Z(e){const[t,r]=n.exports.useState(null),o=n.exports.useRef(0),p=n.exports.useCallback(i=>{i!==o.current&&(console.log(`current width: ${i}px`),r(i),o.current=i)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const i=a(S=>{S.forEach(h=>{p(h.contentRect.width)})},"callback"),y=e.current,g=new ResizeObserver(i);return g.observe(y),()=>{g.unobserve(y)}},[e,p]),t}a(Z,"useContentWidth");const ee=a(e=>{var t,r;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(r=e.after)!=null?r:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeek"),te=a(e=>{var t,r;return typeof e=="object"?{previous:(t=e.previous)!=null?t:!1,next:(r=e.next)!=null?r:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideNavigationOption"),V=a((e,t)=>`${e}_${t}`,"createSlideId"),ne=a(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),re=a((e,t)=>e.size===t.size&&Array.from(e).every(r=>t.has(r)),"isEqualSlideIndexes");function oe(e,{total:t,carouselKey:r}){const[o,p]=n.exports.useState(new Set),i=n.exports.useRef(o),y=Math.min(...Array.from(o));return n.exports.useEffect(()=>{if(!e.current)return;const g=a(u=>{const m=new Set(i.current);u.forEach(v=>{const x=ne(v.target.id);v.intersectionRatio>.9?m.add(x):m.delete(x)}),!re(m,i.current)&&(p(m),i.current=m)},"callback"),S=new IntersectionObserver(g,{root:e.current,threshold:[0,.9,1]}),h=Array.from({length:t}).map((u,m)=>document.querySelector(`#${V(r,m)}`)).filter(u=>!!u);return h.forEach(u=>{S.observe(u)}),()=>{h.forEach(u=>{S.unobserve(u)})}},[r,t,e]),y}a(oe,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:r,perView:o,gap:p=0,peek:i,startAt:y,rewind:g=!0,disabledIndicator:S,disabledSideNavigation:h,children:u}){const m=n.exports.useMemo(()=>ee(i),[i]),v=n.exports.useMemo(()=>te(h),[h]),x=n.exports.useRef(null),I=Z(x),[{slideWidth:A,sliderPaddingRight:E,gapWidth:W},D]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[K,O]=n.exports.useState(!1),b=n.exports.useCallback(c=>{const s=x.current;if(!s)return;const z=V(t,c),M=s.querySelector(`#${z}`);if(!M)return;const H=s.scrollLeft,F=s.getBoundingClientRect().left,X=M.getBoundingClientRect().left;s.scrollTo({left:H+X-F})},[t]),_=n.exports.useMemo(()=>Q.Children.toArray(u).map((c,s)=>({child:c,slideId:V(t,s)})),[t,u]),k=oe(x,{carouselKey:t,total:_.length}),B=k===0,G=g||!B,$=B?_.length-1:k-1,N=k===_.length-1,P=g||!N,T=N?0:k+1,Y=n.exports.useCallback(()=>{b($)},[$,b]),j=n.exports.useCallback(()=>{b(T)},[T,b]);return n.exports.useEffect(()=>{if(!r||K||!P)return;const c=setInterval(()=>{j()},r);return()=>{clearInterval(c)}},[r,P,K,j]),n.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!I)return;const c=o>1?(o-1)*(p!=null?p:0):0,s=(I-c)/o;D({slideWidth:s,sliderPaddingRight:(o-1)*I,gapWidth:o>1?p:0})},[p,o,I]),n.exports.useEffect(()=>{!y||b(y)},[b,y]),w(ie,{className:e,onMouseEnter:()=>{O(!0)},onMouseLeave:()=>{O(!1)},children:[w(le,{ref:x,gapWidth:W,peek:m,children:[_.map(({slideId:c,child:s})=>w(R,{id:c,width:A!=null?A:void 0,children:[s,l(ae,{multipleSlide:!!o&&o>1})]},c)),!!E&&l(se,{inserted:E})]}),!v.previous&&G&&l(fe,{onClick:Y,children:"Go to previous slide"}),!v.next&&P&&l(me,{onClick:j,children:"Go to next slide"}),!S&&l(ce,{children:l(de,{children:_.map(({slideId:c},s)=>l(ue,{children:w(pe,{isActive:k===s,onClick:()=>{b(s)},children:["Go to ",s+1," slide"]})},c))})})]})}a(C,"Carousel");const se=d.div`
  padding-left: ${({inserted:e})=>e}px;
`,ae=d.div`
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
`,ie=d.div`
  position: relative;
  height: 100%;
`,le=d.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${R} + ${R} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
`,ce=d.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,de=d.ol`
  display: inline-block;
`,ue=d.li`
  display: inline-block;
`,pe=d.button`
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
`,fe=d(L)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,me=d(L)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"Peek"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideNavigation:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideNavigation",required:!1,type:{name:"SideNavigationOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ye=d.div`
  max-width: 600px;
  height: 450px;
`,ge=a((e,t)=>l(ye,{children:l(e,{...t})}),"withStyleWrapper"),we={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[ge]},f=Array.from({length:4}).map((e,t)=>l(q,{count:t+1},t)),Ie={args:{carouselKey:"carousel-main",children:f}},Ae={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},Pe=a(()=>w(C,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>l(q,{count:t+1+4},t))]}),"AdditionalChildren"),he=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],je=a(()=>l(C,{carouselKey:"carousel-picture",children:he.map(({src:e,caption:t})=>l(U,{src:e,caption:t},e))}),"PictureCarousel"),Ve={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},Re={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},Ee={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},Ke={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},Oe={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledSideNavigation:!0}},Be={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},$e={args:{carouselKey:"carousel-no-rewind",children:f,perView:3,rewind:!1}},Ne=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind"];export{Pe as AdditionalChildren,Ae as AutoPlay,Ke as DisabledIndicator,Oe as DisabledSideButton,Re as Gap5,Ie as Main,$e as NoRewind,Ee as PeekBefore20,Ve as PerView3,je as PictureCarousel,Be as StartAt,Ne as __namedExportsOrder,we as default};
//# sourceMappingURL=Carousel.stories.c3b89ba1.js.map
