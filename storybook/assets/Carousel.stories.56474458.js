var G=Object.defineProperty;var i=(e,t)=>G(e,"name",{value:t,configurable:!0});import{H as d}from"./styled-components.browser.esm.dcfe6792.js";import{C as B}from"./CarouselSampleSlide.666b5313.js";import{r as n,R as D,a as I,j as c}from"./jsx-runtime.d94ceeb5.js";import{C as K}from"./CircleTriangleButton.e2b3c5f2.js";import{P as Y}from"./Picture.b4c110b1.js";import"./iframe.4f43da36.js";function z(e){const[t,r]=n.exports.useState(null),o=n.exports.useRef(0),u=n.exports.useCallback(l=>{l!==o.current&&(console.log(`current width: ${l}px`),r(l),o.current=l)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const l=i(g=>{g.forEach(h=>{u(h.contentRect.width)})},"callback"),y=e.current,_=new ResizeObserver(l);return _.observe(y),()=>{_.unobserve(y)}},[e,u]),t}i(z,"useContentWidth");const H=i(e=>{var t,r;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(r=e.after)!=null?r:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeek"),F=i(e=>{var t,r;return typeof e=="object"?{previous:(t=e.previous)!=null?t:!1,next:(r=e.next)!=null?r:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},"perseSideNavigationOption"),P=i((e,t)=>`${e}_${t}`,"createSlideId"),X=i(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),J=i((e,t)=>e.size===t.size&&Array.from(e).every(r=>t.has(r)),"isEqualSlideIndexes");function Q(e,{total:t,carouselKey:r}){const[o,u]=n.exports.useState(new Set),l=n.exports.useRef(o),y=Math.min(...Array.from(o));return n.exports.useEffect(()=>{if(!e.current)return;const _=i(p=>{const f=new Set(l.current);p.forEach(b=>{const x=X(b.target.id);b.intersectionRatio>.9?f.add(x):f.delete(x)}),!J(f,l.current)&&(u(f),l.current=f)},"callback"),g=new IntersectionObserver(_,{root:e.current,threshold:[0,.9,1]}),h=Array.from({length:t}).map((p,f)=>document.querySelector(`#${P(r,f)}`)).filter(p=>!!p);return h.forEach(p=>{g.observe(p)}),()=>{h.forEach(p=>{g.unobserve(p)})}},[r,t,e]),y}i(Q,"useCurrentSlideIndex");function k({className:e,carouselKey:t,autoplay:r,perView:o,gap:u=0,peek:l,startAt:y,disabledIndicator:_,disabledSideNavigation:g,children:h}){const p=n.exports.useMemo(()=>H(l),[l]),f=n.exports.useMemo(()=>F(g),[g]),b=n.exports.useRef(null),x=z(b),[{slideWidth:w,sliderPaddingRight:E,gapWidth:$},M]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[V,O]=n.exports.useState(!1),S=n.exports.useCallback(s=>{const a=b.current;if(!a)return;const N=P(t,s),R=a.querySelector(`#${N}`);if(!R)return;const W=a.scrollLeft,q=a.getBoundingClientRect().left,L=R.getBoundingClientRect().left;a.scrollTo({left:W+L-q})},[t]),C=n.exports.useMemo(()=>D.Children.toArray(h).map((s,a)=>({child:s,slideId:P(t,a)})),[t,h]),v=Q(b,{carouselKey:t,total:C.length}),T=n.exports.useCallback(()=>{const s=v===0?C.length-1:v-1;S(s)},[v,S,C.length]),A=n.exports.useCallback(()=>{const s=v===C.length-1?0:v+1;S(s)},[v,S,C.length]);return n.exports.useEffect(()=>{if(!r||V)return;const s=setInterval(()=>{A()},r);return()=>{clearInterval(s)}},[r,V,A]),n.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!x)return;const s=o>1?(o-1)*(u!=null?u:0):0,a=(x-s)/o;M({slideWidth:a,sliderPaddingRight:(o-1)*x,gapWidth:o>1?u:0})},[u,o,x]),n.exports.useEffect(()=>{!y||S(y)},[S,y]),I(ee,{className:e,onMouseEnter:()=>{O(!0)},onMouseLeave:()=>{O(!1)},children:[I(te,{ref:b,gapWidth:$,peek:p,children:[C.map(({slideId:s,child:a})=>I(j,{id:s,width:w!=null?w:void 0,children:[a,c(Z,{multipleSlide:!!o&&o>1})]},s)),!!E&&c(U,{inserted:E})]}),!f.previous&&c(ae,{onClick:T,children:"Go to previous slide"}),!f.next&&c(ie,{onClick:A,children:"Go to next slide"}),!_&&c(ne,{children:c(re,{children:C.map(({slideId:s},a)=>c(oe,{children:I(se,{isActive:v===a,onClick:()=>{S(a)},children:["Go to ",a+1," slide"]})},s))})})]})}i(k,"Carousel");const U=d.div`
  padding-left: ${({inserted:e})=>e}px;
`,Z=d.div`
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
`,ee=d.div`
  position: relative;
  height: 100%;
`,te=d.ol`
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
`,ne=d.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,re=d.ol`
  display: inline-block;
`,oe=d.li`
  display: inline-block;
`,se=d.button`
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
`,ae=d(K)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ie=d(K)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{k.displayName="Carousel",k.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"Peek"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledSideNavigation:{defaultValue:null,description:"hide side navigation button. default: false",name:"disabledSideNavigation",required:!1,type:{name:"SideNavigationOption"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:k.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const le=d.div`
  max-width: 600px;
  height: 450px;
`,ce=i((e,t)=>c(le,{children:c(e,{...t})}),"withStyleWrapper"),be={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:k,decorators:[ce]},m=Array.from({length:4}).map((e,t)=>c(B,{count:t+1},t)),xe={args:{carouselKey:"carousel-main",children:m}},Se={args:{carouselKey:"carousel-auto-play",children:m,autoplay:3e3}},Ce=i(()=>I(k,{carouselKey:"carousel-additional-children",children:[m,Array.from({length:4}).map((e,t)=>c(B,{count:t+1+4},t))]}),"AdditionalChildren"),de=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],ve=i(()=>c(k,{carouselKey:"carousel-picture",children:de.map(({src:e,caption:t})=>c(Y,{src:e,caption:t},e))}),"PictureCarousel"),_e={args:{carouselKey:"carousel-perview-3",children:m,perView:3}},ke={args:{carouselKey:"carousel-gap-5",children:m,perView:3,gap:5}},Ie={args:{carouselKey:"carousel-peek-before-20",children:m,perView:3,peek:{before:20}}},we={args:{carouselKey:"carousel-disabled-indicator",children:m,perView:3,disabledIndicator:!0}},Ae={args:{carouselKey:"carousel-disabled-side-button",children:m,perView:3,disabledSideNavigation:!0}},Pe={args:{carouselKey:"carousel-startAt",children:m,perView:3,startAt:1}},je=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt"];export{Ce as AdditionalChildren,Se as AutoPlay,we as DisabledIndicator,Ae as DisabledSideButton,ke as Gap5,xe as Main,Ie as PeekBefore20,_e as PerView3,ve as PictureCarousel,Pe as StartAt,je as __namedExportsOrder,be as default};
//# sourceMappingURL=Carousel.stories.56474458.js.map
