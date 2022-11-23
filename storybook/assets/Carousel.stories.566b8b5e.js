var $=Object.defineProperty;var u=(e,t)=>$(e,"name",{value:t,configurable:!0});import{H as i}from"./styled-components.browser.esm.32cff494.js";import{C as R}from"./CarouselSampleSlide.485d9bf9.js";import{r as s,R as L,a as v,j as l}from"./jsx-runtime.a2b2247d.js";import{C as j}from"./CircleTriangleButton.4beb2167.js";import{P as K}from"./Picture.428aad69.js";import"./iframe.ab2283ee.js";function G(e){const[t,y]=s.exports.useState(null),o=s.exports.useRef(0),d=s.exports.useCallback(c=>{c!==o.current&&(console.log(`current width: ${c}px`),y(c),o.current=c)},[]);return s.exports.useEffect(()=>{if(!e.current)return;const c=u(f=>{f.forEach(a=>{d(a.contentRect.width)})},"callback"),m=e.current,p=new ResizeObserver(c);return p.observe(m),()=>{p.unobserve(m)}},[e,d]),t}u(G,"useContentWidth");const w=u((e,t)=>`${e}_${t}`,"createSlideId"),V=u(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex");function q(e,{total:t,carouselKey:y}){const[o,d]=s.exports.useState(new Set),c=Math.min(...Array.from(o));return s.exports.useEffect(()=>{if(!e.current)return;const m=u(a=>{d(C=>{const S=new Set(C);return a.forEach(_=>{const b=V(_.target.id);_.intersectionRatio>.9?S.add(b):S.delete(b)}),S})},"callback"),p=new IntersectionObserver(m,{root:e.current,threshold:[0,.9,1]}),f=Array.from({length:t}).map((a,C)=>document.querySelector(`#${w(y,C)}`)).filter(a=>!!a);return f.forEach(a=>{p.observe(a)}),()=>{f.forEach(a=>{p.unobserve(a)})}},[y,t,e]),c}u(q,"useCurrentSlideIndex");function x({className:e,carouselKey:t,autoplay:y,perView:o,gap:d=0,children:c}){const m=s.exports.useRef(null),p=G(m),[{slideWidth:f,sliderPaddingRight:a,gapWidth:C},S]=s.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[_,b]=s.exports.useState(!1),k=s.exports.useCallback(n=>{const r=m.current;if(!r)return;const W=w(t,n),E=r.querySelector(`#${W}`);if(!E)return;const B=r.scrollLeft,M=r.getBoundingClientRect().left,T=E.getBoundingClientRect().left;r.scrollTo({left:B+T-M})},[t]),h=s.exports.useMemo(()=>L.Children.toArray(c).map((n,r)=>({child:n,slideId:w(t,r)})),[t,c]),g=q(m,{carouselKey:t,total:h.length}),O=s.exports.useCallback(()=>{const n=g===0?h.length-1:g-1;k(n)},[g,k,h.length]),P=s.exports.useCallback(()=>{const n=g===h.length-1?0:g+1;k(n)},[g,k,h.length]);return s.exports.useEffect(()=>{if(!y||_)return;const n=setInterval(()=>{P()},y);return()=>{clearInterval(n)}},[y,_,P]),s.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!p)return;const n=o>1?(o-1)*(d!=null?d:0):0,r=(p-n)/o;S({slideWidth:r,sliderPaddingRight:(o-1)*p,gapWidth:o>1?d:0})},[d,o,p]),v(H,{className:e,onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},children:[v(z,{ref:m,gapWidth:C,children:[h.map(({slideId:n,child:r})=>v(A,{id:n,width:f!=null?f:void 0,children:[r,l(Y,{multipleSlide:!!o&&o>1})]},n)),!!a&&l(N,{inserted:a})]}),l(Q,{onClick:O,children:"Go to previous slide"}),l(U,{onClick:P,children:"Go to next slide"}),l(D,{children:l(F,{children:h.map(({slideId:n},r)=>l(X,{children:v(J,{isActive:g===r,onClick:()=>{k(r)},children:["Go to ",r+1," slide"]})},n))})})]})}u(x,"Carousel");const N=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,Y=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,A=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,H=i.div`
  position: relative;
  height: 100%;
`,z=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${A} + ${A} {
    margin-left: ${({gapWidth:e})=>e||0}px;
  }
`,D=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,F=i.ol`
  display: inline-block;
`,X=i.li`
  display: inline-block;
`,J=i.button`
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
`,Q=i(j)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,U=i(j)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{x.displayName="Carousel",x.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:x.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const Z=i.div`
  max-width: 600px;
  height: 450px;
`,ee=u((e,t)=>l(Z,{children:l(e,{...t})}),"withStyleWrapper"),ce={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:x,decorators:[ee]},I=Array.from({length:4}).map((e,t)=>l(R,{count:t+1},t)),ue={args:{carouselKey:"carousel-main",children:I}},de={args:{carouselKey:"carousel-auto-play",children:I,autoplay:3e3}},pe=u(()=>v(x,{carouselKey:"carousel-additional-children",children:[I,Array.from({length:4}).map((e,t)=>l(R,{count:t+1+4},t))]}),"AdditionalChildren"),te=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],me=u(()=>l(x,{carouselKey:"carousel-picture",children:te.map(({src:e,caption:t})=>l(K,{src:e,caption:t},e))}),"PictureCarousel"),ye={args:{carouselKey:"carousel-perview-3",children:I,perView:3}},fe={args:{carouselKey:"carousel-gap-5",children:I,perView:3,gap:5}},he=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5"];export{pe as AdditionalChildren,de as AutoPlay,fe as Gap5,ue as Main,ye as PerView3,me as PictureCarousel,he as __namedExportsOrder,ce as default};
//# sourceMappingURL=Carousel.stories.566b8b5e.js.map
