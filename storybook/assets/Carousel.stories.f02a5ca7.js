var A=Object.defineProperty;var c=(e,n)=>A(e,"name",{value:n,configurable:!0});import{H as a}from"./styled-components.browser.esm.a772b670.js";import{r as p,R as E,a as g,j as r}from"./jsx-runtime.918f70d6.js";import{C as v}from"./CircleTriangleButton.b38e68db.js";import{I as w}from"./Image.25695c54.js";import"./iframe.04ea4b46.js";const f=c((e,n)=>`${e}_${n}`,"createSlideId"),k=c((e,n)=>n===e-1?0:n+1,"getNextSlideIndex"),L=c((e,n)=>n===0?e-1:n-1,"getPrevSlideIndex");function d({className:e,carouselKey:n,options:{autoplay:h}={},children:C}){const m=p.exports.useRef(null),u=p.exports.useCallback(t=>{const o=m.current;if(!o)return;const i=o.querySelector(`#${t}`);!i||o.scrollTo({left:o.scrollLeft+i.getBoundingClientRect().left})},[]),l=p.exports.useMemo(()=>E.Children.toArray(C).map((t,o)=>({child:t,slideId:f(n,o)})),[n,C]),[x,j]=p.exports.useState(l[0].slideId);p.exports.useEffect(()=>{if(!m.current)return;const t=c(s=>{s.forEach(I=>{!I.isIntersecting||j(I.target.id)})},"callback"),o=new IntersectionObserver(t,{root:m.current,threshold:1}),i=l.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return i.forEach(s=>{o.observe(s)}),()=>{i.forEach(s=>{o.unobserve(s)})}},[n,l]);const[S,_]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!h||S)return;const t=l.findIndex(i=>i.slideId===x);if(t<0)return;const o=setInterval(()=>{const i=f(n,k(l.length,t));u(i)},h);return()=>{clearInterval(o)}},[h,n,x,S,u,l]),g(B,{className:e,onMouseEnter:()=>{_(!0)},onMouseLeave:()=>{_(!1)},children:[r(R,{ref:m,children:l.map(({slideId:t,child:o},i)=>g(O,{id:t,children:[o,r(M,{}),r(K,{onClick:()=>{const s=f(n,L(l.length,i));u(s)},children:"Go to previous slide"}),r(q,{onClick:()=>{const s=f(n,k(l.length,i));u(s)},children:"Go to next slide"})]},t))}),r(T,{children:r(W,{className:e,children:l.map(({slideId:t},o)=>r($,{children:g(G,{isActive:x===t,onClick:()=>{u(t)},children:["Go to ",o+1," slide"]})},t))})})]})}c(d,"Carousel");const M=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,O=a.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,B=a.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,R=a.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,T=a.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,W=a.ol`
  display: inline-block;
`,$=a.li`
  display: inline-block;
`,G=a.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:e})=>e?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`,K=a(v)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,q=a(v)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{d.displayName="Carousel",d.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CarouselOptions"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:d.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const N=a.div`
  max-width: 600px;
`,P=a.div`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({even:e})=>e?"#99f":"#f99"};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
`,H=c((e,n)=>r(N,{children:r(e,{...n})}),"withStyleWrapper"),X={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';
import { Image } from '@/components/Image/Image';

const StyledWrapper = styled.div\`
  max-width: 600px;
\`;

const SampleContainer = styled.div<{ even?: boolean }>\`
  flex: 0 0 100%;
  height: 100%;
  background-color: \${({ even }) => (even ? '#99f' : '#f99')};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
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

const Item = ({ index }: { index: number }) => (
  <SampleContainer even={index % 2 === 0}>
    <span>{index + 1}</span>
  </SampleContainer>
);

const children = Array.from({ length: 4 }).map((_, i) => (
  <Item key={i} index={i} />
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
    options: {
      autoplay: 3000,
    },
  },
};

export const AdditionalChildren = () => (
  <Carousel carouselKey="carousel-additional-children">
    {children}
    <Item index={children.length} />
  </Carousel>
);

const IMAGE_LIST = [
  { src: 'images/sky_00009.jpg', caption: 'sky_00009' },
  { src: 'images/sky_00023.jpg', caption: 'sky_00023' },
  { src: 'images/sky_00036.jpg', caption: 'sky_00036' },
  { src: 'images/sky_00037.jpg', caption: 'sky_00037' },
  { src: 'images/sky_00200.jpg', caption: 'sky_00200' },
];

const SampleImage = styled(Image)\`
  height: calc(100% - 2px);
\`;

export const ImageCarousel = () => (
  <Carousel carouselKey="carousel-image">
    {IMAGE_LIST.map(({ src, caption }) => (
      <SampleImage key={src} src={src} caption={caption} />
    ))}
  </Carousel>
);
`,locationsMap:{"additional-children":{startLoc:{col:34,line:69},endLoc:{col:1,line:74},startBody:{col:34,line:69},endBody:{col:1,line:74}},"image-carousel":{startLoc:{col:29,line:88},endLoc:{col:1,line:94},startBody:{col:29,line:88},endBody:{col:1,line:94}}}}},component:d,decorators:[H]},b=c(({index:e})=>r(P,{even:e%2===0,children:r("span",{children:e+1})}),"Item"),y=Array.from({length:4}).map((e,n)=>r(b,{index:n},n)),Z={args:{carouselKey:"carousel-main",children:y}},ee={args:{carouselKey:"carousel-auto-play",children:y,options:{autoplay:3e3}}},ne=c(()=>g(d,{carouselKey:"carousel-additional-children",children:[y,r(b,{index:y.length})]}),"AdditionalChildren"),Y=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],z=a(w)`
  height: calc(100% - 2px);
`,te=c(()=>r(d,{carouselKey:"carousel-image",children:Y.map(({src:e,caption:n})=>r(z,{src:e,caption:n},e))}),"ImageCarousel"),oe=["Main","AutoPlay","AdditionalChildren","ImageCarousel"];export{ne as AdditionalChildren,ee as AutoPlay,te as ImageCarousel,Z as Main,oe as __namedExportsOrder,X as default};
//# sourceMappingURL=Carousel.stories.f02a5ca7.js.map
