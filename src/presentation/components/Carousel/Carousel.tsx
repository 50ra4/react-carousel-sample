import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { CircleTriangleButton } from '../CircleTriangleButton/CircleTriangleButton';
import { useContentWidth } from 'src/hooks/useContentWidth';

export type CarouselOptions = {
  /** autoplay milliseconds. default: no autoplay */
  autoplay?: number;
  perView?: number;
};

export type CarouselProps = CarouselOptions & {
  className?: string;
  carouselKey: string;
  children: React.ReactNode;
};

const createSlideId = (carouselKey: string, index: number) =>
  `${carouselKey}_${index}`;

const slideId2SlideIndex = (slideId: string): number =>
  +slideId.slice(slideId.lastIndexOf('_') + 1);

function useCurrentSlideIndex<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  {
    total,
    carouselKey,
    initial = 0,
  }: { total: number; carouselKey: string; initial?: number },
) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initial);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const callback: IntersectionObserverCallback = (entries) => {
      const targetIndexes = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => slideId2SlideIndex(entry.target.id));

      if (!targetIndexes.length) {
        return;
      }

      const minIndex = Math.min(...targetIndexes);
      setCurrentSlideIndex(minIndex);
    };

    const observer = new IntersectionObserver(callback, {
      root: ref.current,
      threshold: 1,
    });

    const elements = Array.from({ length: total })
      .map((_, i) =>
        document.querySelector(`#${createSlideId(carouselKey, i)}`),
      )
      .filter((v): v is NonNullable<typeof v> => !!v);

    elements.forEach((elm) => {
      observer.observe(elm);
    });

    return () => {
      elements.forEach((elm) => {
        observer.unobserve(elm);
      });
    };
  }, [carouselKey, total, ref]);

  return currentSlideIndex;
}

export function Carousel({
  className,
  carouselKey,
  autoplay,
  perView,
  children,
}: CarouselProps) {
  const sliderRef = useRef<HTMLOListElement | null>(null);
  const sliderWidth = useContentWidth(sliderRef);
  const [slideWidth, setSlideWidth] = useState<number | null>(null);
  const [sliderPaddingRight, setSliderPaddingRight] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const scrollToSlide = useCallback(
    (index: number) => {
      const sliderElement = sliderRef.current;
      if (!sliderElement) {
        return;
      }

      const id = createSlideId(carouselKey, index);
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
    },
    [carouselKey],
  );

  const slides = useMemo(
    () =>
      React.Children.toArray(children).map((child, i) => ({
        child,
        slideId: createSlideId(carouselKey, i),
      })),
    [carouselKey, children],
  );

  const currentSlideIndex = useCurrentSlideIndex(sliderRef, {
    carouselKey,
    total: slides.length,
  });

  const scrollToPreviousSlide = useCallback(() => {
    const targetIndex =
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
    scrollToSlide(targetIndex);
  }, [currentSlideIndex, scrollToSlide, slides.length]);

  const scrollToNextSlide = useCallback(() => {
    const targetIndex =
      currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
    scrollToSlide(targetIndex);
  }, [currentSlideIndex, scrollToSlide, slides.length]);

  useEffect(() => {
    if (!autoplay) {
      return;
    }

    if (isHover) {
      return;
    }

    const timer = setInterval(() => {
      scrollToNextSlide();
    }, autoplay);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay, isHover, scrollToNextSlide]);

  useEffect(() => {
    if (!perView) {
      return;
    }
    if (perView < 1) {
      throw new Error('perView must be 1 or more.');
    }
    if (!sliderWidth) {
      return;
    }

    // TODO: use useReducer？
    const perWidth = sliderWidth / perView;
    setSlideWidth(perWidth);

    const remainder = sliderWidth % perView;
    setSliderPaddingRight(remainder * perWidth);
  }, [perView, sliderWidth]);

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
        {slides.map(({ slideId, child }) => (
          <Slide key={slideId} id={slideId} width={slideWidth ?? undefined}>
            {child}
            <Snapper multipleSlide={!!perView && perView > 1} />
          </Slide>
        ))}
        {!!sliderPaddingRight && (
          <SliderPadding inserted={sliderPaddingRight} />
        )}
      </Slider>
      <PreviewButton onClick={scrollToPreviousSlide}>
        Go to previous slide
      </PreviewButton>
      <NextButton onClick={scrollToNextSlide}>Go to next slide</NextButton>
      <Indicator>
        <IndicatorList>
          {slides.map(({ slideId }, i) => (
            <IndicatorItem key={slideId}>
              <IndicatorButton
                isActive={currentSlideIndex === i}
                onClick={() => {
                  scrollToSlide(i);
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

const SliderPadding = styled.div<{ inserted: number }>`
  padding-left: ${({ inserted }) => inserted}px;
`;

const Snapper = styled.div<{ multipleSlide?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({ multipleSlide }) =>
    multipleSlide ? 'start' : 'center'};
`;

const Slide = styled.li<{ width?: number }>`
  position: relative;
  flex: 0 0 auto;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

const Root = styled.div`
  position: relative;
  height: 100%;
`;

const Slider = styled.ol`
  height: 100%;
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
  transform: translateY(-24px);
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
  margin: 0 4px;
  font-size: 0;
  transition: transform 0.1s;
`;

const PreviewButton = styled(CircleTriangleButton)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`;
const NextButton = styled(CircleTriangleButton)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;
