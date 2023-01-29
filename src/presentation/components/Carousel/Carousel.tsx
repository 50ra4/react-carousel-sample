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
import { useIsHover } from 'src/hooks/useIsHover';

type Peek = { before: number; after: number };
type PeekOption = number | Partial<Peek>;

const persePeekOption = (peek?: PeekOption): Peek => {
  switch (typeof peek) {
    case 'object':
      return {
        before: peek.before ?? 0,
        after: peek.after ?? 0,
      };

    case 'number':
      return {
        before: peek,
        after: peek,
      };

    default:
      return {
        before: 0,
        after: 0,
      };
  }
};

export type CarouselOptions = {
  /** autoplay milliseconds. default: no autoplay */
  autoplay?: number;
  /** a number of slides visible on the slider. default: 1 */
  perView?: number;
  /** add margin between slides. But 0 when perView is 1. default: 0 */
  gap?: number;
  /** The value of the future slider which have to be visible in the current view. default: 0 */
  peek?: PeekOption;
  /** Start at specific slide number. default: 0 */
  startAt?: number;
  /** allow looping. default: true */
  rewind?: boolean;
  /** stop running perView number of slides from the end */
  bound?: boolean;
  /** sets the width of the slide. However, it cannot be used together with the preview. */
  slideWidth?: number;

  /** hide Indicator. default: false */
  disabledIndicator?: boolean;
  /** hide PreviousButton. default: false */
  disabledPreviousButton?: boolean;
  /** hide NextButton. default: false */
  disabledNextButton?: boolean;
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

const isEqualSlideIndexes = (a: Set<number>, b: Set<number>): boolean =>
  a.size === b.size && Array.from(a).every((v) => b.has(v));

function useCurrentSlideIndex<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  { total, carouselKey }: { total: number; carouselKey: string },
) {
  const [displayedIndexes, setDisplayedIndexes] = useState<Set<number>>(
    new Set(),
  );
  const prevDisplayedIndexes = useRef(displayedIndexes);
  const currentSlideIndex = Math.min(...Array.from(displayedIndexes));

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const callback: IntersectionObserverCallback = (entries) => {
      const updated = new Set(prevDisplayedIndexes.current);
      entries.forEach((entry) => {
        const index = slideId2SlideIndex(entry.target.id);
        if (entry.intersectionRatio > 0.9) {
          updated.add(index);
        } else {
          updated.delete(index);
        }
      });

      if (isEqualSlideIndexes(updated, prevDisplayedIndexes.current)) {
        return;
      }

      setDisplayedIndexes(updated);
      prevDisplayedIndexes.current = updated;
    };

    const observer = new IntersectionObserver(callback, {
      root: ref.current,
      threshold: [0, 0.9, 1],
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

  return {
    currentSlideIndex,
    isDisplayedLastSlide: displayedIndexes.has(total - 1),
  };
}

export function Carousel({
  className,
  carouselKey,
  autoplay,
  perView,
  gap = 0,
  peek: peekOption,
  startAt,
  rewind = true,
  bound,
  slideWidth: slideWidthOption,
  disabledIndicator,
  disabledPreviousButton,
  disabledNextButton,
  children,
}: CarouselProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const peek = useMemo(() => persePeekOption(peekOption), [peekOption]);
  const sliderRef = useRef<HTMLOListElement | null>(null);
  const sliderWidth = useContentWidth(sliderRef);

  const isHover = useIsHover(rootRef);

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

  const { currentSlideIndex, isDisplayedLastSlide } = useCurrentSlideIndex(
    sliderRef,
    {
      carouselKey,
      total: slides.length,
    },
  );

  const isCurrentSlideFirst = currentSlideIndex === 0;
  const canScrollToPrevious = rewind || !isCurrentSlideFirst;
  const previousSlideIndex = isCurrentSlideFirst
    ? slides.length - 1
    : currentSlideIndex - 1;

  const isCurrentSlideLast = currentSlideIndex === slides.length - 1;
  const shouldScrollToFirst =
    isCurrentSlideLast || (!!bound && isDisplayedLastSlide);
  const canScrollToNext = rewind || !shouldScrollToFirst;
  const nextSlideIndex = shouldScrollToFirst ? 0 : currentSlideIndex + 1;

  const scrollToPrevious = useCallback(() => {
    scrollToSlide(previousSlideIndex);
  }, [previousSlideIndex, scrollToSlide]);

  const scrollToNext = useCallback(() => {
    scrollToSlide(nextSlideIndex);
  }, [nextSlideIndex, scrollToSlide]);

  useEffect(() => {
    if (!autoplay) {
      return;
    }

    if (isHover) {
      return;
    }

    if (!canScrollToNext) {
      return;
    }

    const timer = setInterval(() => {
      scrollToNext();
    }, autoplay);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay, canScrollToNext, isHover, scrollToNext]);

  useEffect(() => {
    if (perView && perView < 1) {
      throw new Error('perView must be 1 or more.');
    }
    if (perView && slideWidthOption) {
      throw new Error('both perView and slideWidth cannot be set.');
    }
  }, [perView, slideWidthOption]);

  const { slideWidth, sliderPaddingRight } = useMemo((): {
    slideWidth?: number;
    sliderPaddingRight: number;
  } => {
    const initial = {
      sliderPaddingRight: 0,
    };
    if (!sliderWidth) {
      return initial;
    }

    if (perView) {
      const gapTotal = perView > 1 ? (perView - 1) * (gap ?? 0) : 0;
      const perWidth = (sliderWidth - gapTotal) / perView;
      return {
        slideWidth: perWidth,
        sliderPaddingRight: bound ? 0 : (perView - 1) * sliderWidth,
      };
    }

    if (slideWidthOption) {
      return {
        slideWidth: slideWidthOption,
        sliderPaddingRight: bound ? 0 : sliderWidth - slideWidthOption,
      };
    }

    return initial;
  }, [bound, gap, perView, slideWidthOption, sliderWidth]);

  const gapWidth = !!perView && perView > 1 ? gap : 0;
  const isMultipleSlide = sliderWidth !== slideWidth;

  useEffect(() => {
    if (!startAt) {
      return;
    }
    scrollToSlide(startAt);
  }, [scrollToSlide, startAt]);

  return (
    <Root ref={rootRef} className={className}>
      <Slider ref={sliderRef} gapWidth={gapWidth} peek={peek}>
        {slides.map(({ slideId, child }) => (
          <Slide key={slideId} id={slideId} width={slideWidth}>
            {child}
            <Snapper isMultipleSlide={isMultipleSlide} />
          </Slide>
        ))}
        <SliderPadding inserted={sliderPaddingRight || peek.after} />
      </Slider>
      {!disabledPreviousButton && canScrollToPrevious && (
        <PreviewButton onClick={scrollToPrevious}>
          Go to previous slide
        </PreviewButton>
      )}
      {!disabledNextButton && canScrollToNext && (
        <NextButton onClick={scrollToNext}>Go to next slide</NextButton>
      )}
      {!disabledIndicator && (
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
      )}
    </Root>
  );
}

const SliderPadding = styled.div<{ inserted: number }>`
  padding-left: ${({ inserted }) => inserted}px;
`;

const Snapper = styled.div<{ isMultipleSlide?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({ isMultipleSlide }) =>
    isMultipleSlide ? 'start' : 'center'};
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

type SliderProps = { peek: Peek; gapWidth: number };

const Slider = styled.ol<SliderProps>`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${Slide} + ${Slide} {
    margin-left: ${({ gapWidth }) => gapWidth ?? 0}px;
  }

  scroll-padding-left: ${({ peek: { before } }) => before}px;
  scroll-padding-right: ${({ peek: { after } }) => after}px;
  padding-left: ${({ peek: { before } }) => before}px;
  padding-right: ${({ peek: { after } }) => after}px;
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
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.2));
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

/**
 * exclude disabledXXX key from props
 */
type ExcludeDisabledKey<K extends string> = K extends `disabled${string}`
  ? K
  : never;

type CustomUICarouselProps = Omit<
  CarouselProps,
  ExcludeDisabledKey<keyof CarouselProps>
>;

export function CustomUICarousel({
  children,
  ...props
}: CustomUICarouselProps) {
  return <StyledCarousel {...props}>{children}</StyledCarousel>;
}

const StyledCarousel = styled(Carousel)`
  @media screen and (max-width: 400px) {
    & {
      ${PreviewButton}, ${NextButton}, ${Indicator} {
        display: none;
      }
    }
  }

  @media screen and (min-width: 401px) {
    &:not(:hover) {
      ${PreviewButton}, ${NextButton}, ${Indicator} {
        display: none;
      }
    }
  }
`;
