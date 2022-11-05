import React, { useCallback, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

export type CarouselItem = {
  key: string;
  caption: string;
};

export type CarouselProps = {
  className?: string;
  carouselKey: string;
  items: CarouselItem[];
};

const createSlideId = (carouselKey: string, itemKey: string) =>
  `${carouselKey}_${itemKey}`;

export function Carousel({ className, carouselKey, items }: CarouselProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const scrollToSlide = useCallback((id: string) => {
    const target: HTMLElement | undefined =
      rootRef.current?.querySelector(`#${id}`) ?? undefined;
    if (!target) {
      return;
    }
    target.scrollIntoView();
  }, []);

  return (
    <Root ref={rootRef} className={className}>
      <Slider>
        {items.map(({ key }, i) => (
          <Slide key={key} id={createSlideId(carouselKey, key)}>
            <Snapper />
            <NavigationPreview
              onClick={() => {
                const slideId = createSlideId(
                  carouselKey,
                  i === 0 ? items[items.length - 1].key : items[i - 1].key,
                );
                scrollToSlide(slideId);
              }}
            >
              Go to previous slide
            </NavigationPreview>
            <NavigationNext
              onClick={() => {
                const slideId = createSlideId(
                  carouselKey,
                  i === items.length - 1 ? items[0].key : items[i + 1].key,
                );
                scrollToSlide(slideId);
              }}
            >
              Go to next slide
            </NavigationNext>
          </Slide>
        ))}
      </Slider>
      <Navigation>
        <NavigationList className={className}>
          {items.map(({ key, caption }) => (
            <NavigationItem key={key}>
              <NavigationButton
                onClick={() => {
                  const slideId = createSlideId(carouselKey, key);
                  scrollToSlide(slideId);
                }}
              >
                Go to {caption}
              </NavigationButton>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </Root>
  );
}

const toNext = keyframes`
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
`;

const toStart = keyframes`
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
`;

const snap = keyframes`
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
`;

const Snapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`;

const Slide = styled.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;

  &:nth-child(even) {
    background-color: #99f;
  }

  &:before {
    content: counter(item);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -40%, 70px);
    color: #fff;
    font-size: 2em;
  }
`;

const Root = styled.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;

  /* animation
  @media (prefers-reduced-motion: reduce) {
    ${Snapper} {
      animation-name: none;
    }
  }

  @media (hover: hover) {
    ${Snapper} {
      animation-name: ${toNext}, ${snap};
      animation-timing-function: ease;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    ${Slide}:last-child {
      ${Snapper} {
        animation-name: ${toStart}, ${snap};
      }
    }
  }

  &:hover,
  &:focus-within {
    ${Snapper} {
      animation-name: none;
    }
  } 
  */
`;

const Slider = styled.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

const Navigation = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`;
const NavigationList = styled.ol`
  display: inline-block;
`;
const NavigationItem = styled.li`
  display: inline-block;
`;
const NavigationButton = styled.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: #333;
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`;

const ArrowButton = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <ArrowCircle className={className} onClick={onClick}>
      <ArrowTriangle />
      {children}
    </ArrowCircle>
  );
};

const ArrowCircle = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 0;
  outline: 0;
  border: none;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowTriangle = styled.div`
  margin-right: 7.5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 12.5px 10px 0;
  border-color: transparent #ffe transparent transparent;
`;

const NavigationPreview = styled(ArrowButton)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`;

const NavigationNext = styled(ArrowButton)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;
