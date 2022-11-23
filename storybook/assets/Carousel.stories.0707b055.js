var q=Object.defineProperty;var i=(e,t)=>q(e,"name",{value:t,configurable:!0});import{H as d}from"./styled-components.browser.esm.b9583418.js";import{C as R}from"./CarouselSampleSlide.5419a819.js";import{r as n,R as G,a as I,j as l}from"./jsx-runtime.1ecdcc97.js";import{C as $}from"./CircleTriangleButton.20b6a62e.js";import{P as D}from"./Picture.0e5fcc23.js";import"./iframe.0d7f60e3.js";function Y(e){const[t,a]=n.exports.useState(null),o=n.exports.useRef(0),p=n.exports.useCallback(u=>{u!==o.current&&(console.log(`current width: ${u}px`),a(u),o.current=u)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const u=i(g=>{g.forEach(c=>{p(c.contentRect.width)})},"callback"),S=e.current,f=new ResizeObserver(u);return f.observe(S),()=>{f.unobserve(S)}},[e,p]),t}i(Y,"useContentWidth");const H=i(e=>{var t,a;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(a=e.after)!=null?a:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeek"),z=i(e=>{var t,a;return typeof e=="object"?{previous:(t=e.previous)!=null?t:!1,next:(a=e.next)!=null?a:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideNavigationOption"),P=i((e,t)=>`${e}_${t}`,"createSlideId"),F=i(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex");function X(e,{total:t,carouselKey:a}){const[o,p]=n.exports.useState(new Set),u=Math.min(...Array.from(o));return n.exports.useEffect(()=>{if(!e.current)return;const S=i(c=>{p(C=>{const m=new Set(C);return c.forEach(h=>{const v=F(h.target.id);h.intersectionRatio>.9?m.add(v):m.delete(v)}),m})},"callback"),f=new IntersectionObserver(S,{root:e.current,threshold:[0,.9,1]}),g=Array.from({length:t}).map((c,C)=>document.querySelector(`#${P(a,C)}`)).filter(c=>!!c);return g.forEach(c=>{f.observe(c)}),()=>{g.forEach(c=>{f.unobserve(c)})}},[a,t,e]),u}i(X,"useCurrentSlideIndex");function _({className:e,carouselKey:t,autoplay:a,perView:o,gap:p=0,peek:u,disabledIndicator:S,disabledSideNavigation:f,children:g}){const c=n.exports.useMemo(()=>H(u),[u]),C=n.exports.useMemo(()=>z(f),[f]),m=n.exports.useRef(null),h=Y(m),[{slideWidth:v,sliderPaddingRight:A,gapWidth:K},V]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[E,B]=n.exports.useState(!1),k=n.exports.useCallback(r=>{const s=m.current;if(!s)return;const T=P(t,r),O=s.querySelector(`#${T}`);if(!O)return;const N=s.scrollLeft,W=s.getBoundingClientRect().left,L=O.getBoundingClientRect().left;s.scrollTo({left:N+L-W})},[t]),b=n.exports.useMemo(()=>G.Children.toArray(g).map((r,s)=>({child:r,slideId:P(t,s)})),[t,g]),x=X(m,{carouselKey:t,total:b.length}),M=n.exports.useCallback(()=>{const r=x===0?b.length-1:x-1;k(r)},[x,k,b.length]),w=n.exports.useCallback(()=>{const r=x===b.length-1?0:x+1;k(r)},[x,k,b.length]);return n.exports.useEffect(()=>{if(!a||E)return;const r=setInterval(()=>{w()},a);return()=>{clearInterval(r)}},[a,E,w]),n.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!h)return;const r=o>1?(o-1)*(p!=null?p:0):0,s=(h-r)/o;V({slideWidth:s,sliderPaddingRight:(o-1)*h,gapWidth:o>1?p:0})},[p,o,h]),I(U,{className:e,onMouseEnter:()=>{B(!0)},onMouseLeave:()=>{B(!1)},children:[I(Z,{ref:m,gapWidth:K,peek:c,children:[b.map(({slideId:r,child:s})=>I(j,{id:r,width:v!=null?v:void 0,children:[s,l(Q,{multipleSlide:!!o&&o>1})]},r)),!!A&&l(J,{inserted:A})]}),!C.previous&&l(oe,{onClick:M,children:"Go to previous slide"}),!C.next&&l(se,{onClick:w,children:"Go to next slide"}),!S&&l(ee,{children:l(te,{children:b.map(({slideId:r},s)=>l(ne,{children:I(re,{isActive:x===s,onClick:()=>{k(s)},children:["Go to ",s+1," slide"]})},r))})})]})}i(_,"Carousel");const J=d.div`
  padding-left: ${({inserted:e})=>e}px;
`,Q=d.div`
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
`,U=d.div`
  position: relative;
  height: 100%;
`,Z=d.ol`
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
`,ee=d.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,te=d.ol`
  display: inline-block;
`,ne=d.li`
  display: inline-block;
`,re=d.button`
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
`,oe=d($)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,se=d($)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{_.displayName="Carousel",_.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"Peek"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideNavigation:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideNavigation",required:!1,type:{name:"SideNavigationOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:_.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ae=d.div`
  max-width: 600px;
  height: 450px;
`,ie=i((e,t)=>l(ae,{children:l(e,{...t})}),"withStyleWrapper"),ge={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:_,decorators:[ie]},y=Array.from({length:4}).map((e,t)=>l(R,{count:t+1},t)),he={args:{carouselKey:"carousel-main",children:y}},be={args:{carouselKey:"carousel-auto-play",children:y,autoplay:3e3}},xe=i(()=>I(_,{carouselKey:"carousel-additional-children",children:[y,Array.from({length:4}).map((e,t)=>l(R,{count:t+1+4},t))]}),"AdditionalChildren"),le=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Se=i(()=>l(_,{carouselKey:"carousel-picture",children:le.map(({src:e,caption:t})=>l(D,{src:e,caption:t},e))}),"PictureCarousel"),Ce={args:{carouselKey:"carousel-perview-3",children:y,perView:3}},ve={args:{carouselKey:"carousel-gap-5",children:y,perView:3,gap:5}},_e={args:{carouselKey:"carousel-peek-before-20",children:y,perView:3,peek:{before:20}}},ke={args:{carouselKey:"carousel-disabled-indicator",children:y,perView:3,disabledIndicator:!0}},Ie={args:{carouselKey:"carousel-disabled-side-button",children:y,perView:3,disabledSideNavigation:!0}},we=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton"];export{xe as AdditionalChildren,be as AutoPlay,ke as DisabledIndicator,Ie as DisabledSideButton,ve as Gap5,he as Main,_e as PeekBefore20,Ce as PerView3,Se as PictureCarousel,we as __namedExportsOrder,ge as default};
//# sourceMappingURL=Carousel.stories.0707b055.js.map
