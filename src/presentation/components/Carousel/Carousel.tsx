import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { CircleTriangleButton } from '../CircleTriangleButton/CircleTriangleButton';

export type CarouselOptions = {
  /** autoplay milliseconds. default: no autoplay */
  autoplay?: number;
};

export type CarouselProps = CarouselOptions & {
  className?: string;
  carouselKey: string;
  children: React.ReactNode;
};

const createSlideId = (carouselKey: string, index: number) =>
  `${carouselKey}_${index}`;

const getNextSlideIndex = (length: number, currentIndex: number) =>
  currentIndex === length - 1 ? 0 : currentIndex + 1;

const getPrevSlideIndex = (length: number, currentIndex: number) =>
  currentIndex === 0 ? length - 1 : currentIndex - 1;

export function Carousel({
  className,
  carouselKey,
  autoplay,
  children,
}: CarouselProps) {
  const sliderRef = useRef<HTMLOListElement | null>(null);

  const scrollToSlide = useCallback((id: string) => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) {
      return;
    }

    const targetElement: HTMLElement | null = sliderElement.querySelector(
      `#${id}`,
    );
    if (!targetElement) {
      return;
    }

    const scrollX = sliderElement.scrollLeft;
    const sliderPosition = sliderElement.getBoundingClientRect().left;
    const targetPosition = targetElement.getBoundingClientRect().left;

    sliderElement.scrollTo({
      left: scrollX + targetPosition - sliderPosition,
    });
  }, []);

  const slides = useMemo(
    () =>
      React.Children.toArray(children).map((child, i) => ({
        child,
        slideId: createSlideId(carouselKey, i),
      })),
    [carouselKey, children],
  );

  const [currentSlideId, setCurrentSlideId] = useState(slides[0].slideId);

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setCurrentSlideId(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: sliderRef.current,
      threshold: 1,
    });

    const elements = slides
      .map(({ slideId }) => document.querySelector(`#${slideId}`))
      .filter((v): v is NonNullable<typeof v> => !!v);

    elements.forEach((elm) => {
      observer.observe(elm);
    });

    return () => {
      elements.forEach((elm) => {
        observer.unobserve(elm);
      });
    };
  }, [carouselKey, slides]);

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!autoplay) {
      return;
    }

    if (isHover) {
      return;
    }

    const currentSlideIndex = slides.findIndex(
      (slide) => slide.slideId === currentSlideId,
    );
    if (currentSlideIndex < 0) {
      return;
    }

    const timer = setInterval(() => {
      const nextSlideId = createSlideId(
        carouselKey,
        getNextSlideIndex(slides.length, currentSlideIndex),
      );

      scrollToSlide(nextSlideId);
    }, autoplay);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay, carouselKey, currentSlideId, isHover, scrollToSlide, slides]);

  return (
    <Root
      className={className}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Slider ref={sliderRef}>
        {slides.map(({ slideId, child }, i) => (
          <Slide key={slideId} id={slideId}>
            {child}
            <Snapper />
            <PreviewButton
              onClick={() => {
                const targetId = createSlideId(
                  carouselKey,
                  getPrevSlideIndex(slides.length, i),
                );
                scrollToSlide(targetId);
              }}
            >
              Go to previous slide
            </PreviewButton>
            <NextButton
              onClick={() => {
                const targetId = createSlideId(
                  carouselKey,
                  getNextSlideIndex(slides.length, i),
                );
                scrollToSlide(targetId);
              }}
            >
              Go to next slide
            </NextButton>
          </Slide>
        ))}
      </Slider>
      <Indicator>
        <IndicatorList className={className}>
          {slides.map(({ slideId }, i) => (
            <IndicatorItem key={slideId}>
              <IndicatorButton
                isActive={currentSlideId === slideId}
                onClick={() => {
                  scrollToSlide(slideId);
                }}
              >
                Go to {i + 1} slide
              </IndicatorButton>
            </IndicatorItem>
          ))}
        </IndicatorList>
      </Indicator>
    </Root>
  );
}

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
`;

const Root = styled.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`;

const Slider = styled.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

const Indicator = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`;
const IndicatorList = styled.ol`
  display: inline-block;
`;
const IndicatorItem = styled.li`
  display: inline-block;
`;
const IndicatorButton = styled.button<{ isActive?: boolean }>`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({ isActive }) => (isActive ? '#ffe' : '#333')};
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`;

const PreviewButton = styled(CircleTriangleButton)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`;
const NextButton = styled(CircleTriangleButton)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;
