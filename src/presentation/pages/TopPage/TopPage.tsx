import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';
import { CarouselSampleSlide } from '@/components/Carousel/CarouselSampleSlide';
import { Picture } from '@/components/Picture/Picture';
import { SubSection } from '@/components/SubSection/SubSection';
import { PageTemplate } from 'src/presentation/PageTemplate';

const Array8 = Array.from({ length: 8 }).map((_, i) => i + 1);
const IMAGE_LIST = [
  { src: 'images/sky_00009.jpg', caption: 'sky_00009' },
  { src: 'images/sky_00023.jpg', caption: 'sky_00023' },
  { src: 'images/sky_00036.jpg', caption: 'sky_00036' },
  { src: 'images/sky_00037.jpg', caption: 'sky_00037' },
  { src: 'images/sky_00200.jpg', caption: 'sky_00200' },
];

function TopPage() {
  return (
    <PageTemplate title="React Carousel Sample">
      <FullWidthSubSection title="full width">
        <FullWidthCarousel carouselKey="full-width" autoplay={10000}>
          {Array8.map((count) => (
            <CarouselSampleSlide key={count} count={count} />
          ))}
        </FullWidthCarousel>
      </FullWidthSubSection>
      <Wrapper>
        <SubSectionGroup>
          <StyledSubSection title="autoplay 5s">
            <StyledCarousel
              carouselKey="autoplay-5s"
              perView={2}
              gap={1}
              autoplay={5000}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="images">
            <StyledCarousel carouselKey="images">
              {IMAGE_LIST.map(({ src, caption }) => (
                <Picture key={src} src={src} caption={caption} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="perView 2">
            <StyledCarousel carouselKey="perView-2" perView={2}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="perView 4">
            <StyledCarousel carouselKey="perView-4" perView={4}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="perView 5">
            <StyledCarousel carouselKey="perView-5" perView={5}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="gap 5">
            <StyledCarousel carouselKey="gap-5" perView={3} gap={5}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="gap 10">
            <StyledCarousel carouselKey="gap-10" perView={3} gap={10}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="peek before 20">
            <StyledCarousel
              carouselKey="peek-before-20"
              perView={3}
              gap={1}
              peek={{ before: 20 }}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="peek after 20">
            <StyledCarousel
              carouselKey="peek-after-20"
              perView={3}
              gap={1}
              peek={{ after: 20 }}
              bound={true}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="peek 20">
            <StyledCarousel carouselKey="peek-20" perView={3} gap={1} peek={20}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="disabled indicator">
            <StyledCarousel
              carouselKey="disabled-indicator"
              perView={3}
              gap={1}
              disabledIndicator={true}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="hide previous button">
            <StyledCarousel
              carouselKey="disabled-previous-button"
              perView={3}
              gap={1}
              disabledPreviousButton={true}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="hide next button">
            <StyledCarousel
              carouselKey="disabled-next-button"
              perView={3}
              gap={1}
              disabledNextButton={true}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="start at 3">
            <StyledCarousel
              carouselKey="start-at-3"
              perView={3}
              gap={1}
              startAt={2}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="not rewind">
            <StyledCarousel
              carouselKey="not-rewind"
              perView={2}
              gap={1}
              rewind={false}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="bound">
            <StyledCarousel
              carouselKey="bound"
              perView={3}
              gap={1}
              bound={true}
            >
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="slide width 140">
            <StyledCarousel carouselKey="slide-width" slideWidth={140} gap={1}>
              {Array8.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </StyledCarousel>
          </StyledSubSection>
        </SubSectionGroup>
      </Wrapper>
    </PageTemplate>
  );
}

const StyledSubSection = styled(SubSection)`
  background-color: #fff;
`;

const FullWidthSubSection = styled(StyledSubSection)`
  margin: 16px 0;
`;

const FullWidthCarousel = styled(Carousel)`
  width: 100%;
  height: 300px;
`;

const Wrapper = styled.div`
  margin: 16px 0;
`;

const StyledCarousel = styled(Carousel)``;

const SubSectionGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${StyledSubSection} {
    margin: 0 8px 8px 0;

    & > ${StyledCarousel} {
      width: calc(calc(1280px - 24px) / 4);
      height: 225px;
    }
  }
`;

export default TopPage;
