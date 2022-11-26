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

type Peek = { before: number; after: number };
type PeekOption = number | Partial<Peek>;

const persePeekOption = (peek?: PeekOption): Peek => {
  if (typeof peek === 'object') {
    return {
      before: peek.before ?? 0,
      after: peek.after ?? 0,
    };
  }
  if (typeof peek === 'number') {
    return {
      before: peek,
      after: peek,
    };
  }
  return {
    before: 0,
    after: 0,
  };
};

type SideButton = {
  previous: boolean;
  next: boolean;
};
type SideButtonOption = boolean | Partial<SideButton>;

const perseSideButtonOption = (option?: SideButtonOption): SideButton => {
  if (typeof option === 'object') {
    return {
      previous: option.previous ?? false,
      next: option.next ?? false,
    };
  }
  if (typeof option === 'boolean') {
    return {
      previous: option,
      next: option,
    };
  }
  return {
    previous: false,
    next: false,
  };
};

type SliderOption = {
  slideWidth: number | null;
  sliderPaddingRight: number;
  gapWidth: number;
  multipleSlide?: boolean;
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
  /** hide side navigation button. default: false */
  disabledSideButton?: SideButtonOption;
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
  slideWidth,
  disabledIndicator,
  disabledSideButton: disabledSideButtonOption,
  children,
}: CarouselProps) {
  const peek = useMemo(() => persePeekOption(peekOption), [peekOption]);
  const disabledSideButton = useMemo(
    () => perseSideButtonOption(disabledSideButtonOption),
    [disabledSideButtonOption],
  );

  const sliderRef = useRef<HTMLOListElement | null>(null);
  const sliderWidth = useContentWidth(sliderRef);
  const [sliderOption, setSliderOption] = useState<SliderOption>({
    slideWidth: null,
    sliderPaddingRight: 0,
    gapWidth: 0,
  });
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
    if (!perView || !slideWidth) {
      return;
    }
    throw new Error('both perView and slideWidth cannot be set.');
  }, [perView, slideWidth]);

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

    const gapTotal = perView > 1 ? (perView - 1) * (gap ?? 0) : 0;
    const perWidth = (sliderWidth - gapTotal) / perView;

    setSliderOption({
      slideWidth: perWidth,
      sliderPaddingRight: bound ? 0 : (perView - 1) * sliderWidth,
      gapWidth: perView > 1 ? gap : 0,
      multipleSlide: perView > 1,
    });
  }, [bound, gap, perView, sliderWidth]);

  useEffect(() => {
    if (!slideWidth) {
      return;
    }
    if (!sliderWidth) {
      return;
    }
    setSliderOption({
      slideWidth,
      sliderPaddingRight: bound ? 0 : sliderWidth - slideWidth,
      gapWidth: gap,
      multipleSlide: sliderWidth > slideWidth,
    });
  }, [bound, gap, slideWidth, sliderWidth]);

  useEffect(() => {
    if (!startAt) {
      return;
    }
    scrollToSlide(startAt);
  }, [scrollToSlide, startAt]);

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
      <Slider ref={sliderRef} gapWidth={sliderOption.gapWidth} peek={peek}>
        {slides.map(({ slideId, child }) => (
          <Slide
            key={slideId}
            id={slideId}
            width={sliderOption.slideWidth ?? undefined}
          >
            {child}
            <Snapper multipleSlide={!!sliderOption.multipleSlide} />
          </Slide>
        ))}
        <SliderPadding
          inserted={sliderOption.sliderPaddingRight || peek.after}
        />
      </Slider>
      {!disabledSideButton.previous && canScrollToPrevious && (
        <PreviewButton onClick={scrollToPrevious}>
          Go to previous slide
        </PreviewButton>
      )}
      {!disabledSideButton.next && canScrollToNext && (
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

  scroll-padding: ${({ peek: { before, after } }) =>
    !before && !after ? '0' : `0 ${after}px 0 ${before}px`};
  padding: ${({ peek: { before, after } }) =>
    !before && !after ? '0' : `0 ${after}px 0 ${before}px`};
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
