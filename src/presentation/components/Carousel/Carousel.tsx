import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import styled from 'styled-components';

export type CarouselOptions = {
  /** autoplay milliseconds. default: no autoplay */
  autoplay?: number;
};

export type CarouselProps = {
  className?: string;
  carouselKey: string;
  options?: CarouselOptions;
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
  options: { autoplay } = {},
  children,
}: CarouselProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const scrollToSlide = useCallback((id: string) => {
    const target: HTMLElement | undefined =
      rootRef.current?.querySelector(`#${id}`) ?? undefined;
    if (!target) {
      return;
    }
    target.scrollIntoView();
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
    if (!rootRef.current) {
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
      root: rootRef.current,
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

    if (!isHover) {
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
      ref={rootRef}
      className={className}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Slider>
        {slides.map(({ slideId, child }, i) => (
          <Slide key={slideId} id={slideId}>
            {child}
            <Snapper />
            <NavigationPreview
              onClick={() => {
                const targetId = createSlideId(
                  carouselKey,
                  getPrevSlideIndex(slides.length, i),
                );
                scrollToSlide(targetId);
              }}
            >
              Go to previous slide
            </NavigationPreview>
            <NavigationNext
              onClick={() => {
                const targetId = createSlideId(
                  carouselKey,
                  getNextSlideIndex(slides.length, i),
                );
                scrollToSlide(targetId);
              }}
            >
              Go to next slide
            </NavigationNext>
          </Slide>
        ))}
      </Slider>
      <Navigation>
        <NavigationList className={className}>
          {slides.map(({ slideId }, i) => (
            <NavigationItem key={slideId}>
              <NavigationButton
                isActive={currentSlideId === slideId}
                onClick={() => {
                  scrollToSlide(slideId);
                }}
              >
                Go to {i + 1} slide
              </NavigationButton>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
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
const NavigationButton = styled.button<{ isActive?: boolean }>`
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
