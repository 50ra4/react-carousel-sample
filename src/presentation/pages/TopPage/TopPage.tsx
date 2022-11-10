import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';
import { CarouselSampleSlide } from '@/components/Carousel/CarouselSampleSlide';
import { Picture } from '@/components/Picture/Picture';
import { SubSection } from '@/components/SubSection/SubSection';

const Array4 = Array.from({ length: 4 }).map((_, i) => i + 1);
const IMAGE_LIST = [
  { src: 'images/sky_00009.jpg', caption: 'sky_00009' },
  { src: 'images/sky_00023.jpg', caption: 'sky_00023' },
  { src: 'images/sky_00036.jpg', caption: 'sky_00036' },
  { src: 'images/sky_00037.jpg', caption: 'sky_00037' },
  { src: 'images/sky_00200.jpg', caption: 'sky_00200' },
];

function TopPage() {
  return (
    <Root>
      <Title>Carousel Sample</Title>
      <FullWidthSubSection title="full width">
        <FullWidthCarousel carouselKey="full-width">
          {Array4.map((count) => (
            <CarouselSampleSlide key={count} count={count} />
          ))}
        </FullWidthCarousel>
      </FullWidthSubSection>
      <Wrapper>
        <SubSectionGroup>
          <StyledSubSection title="autoplay 3s">
            <StyledCarousel carouselKey="autoplay-3s" autoplay={3000}>
              {Array4.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
              {Array4.map((count) => (
                <CarouselSampleSlide key={count} count={count + 4} />
              ))}
            </StyledCarousel>
          </StyledSubSection>

          <StyledSubSection title="autoplay 5s">
            <StyledCarousel carouselKey="autoplay-5s" autoplay={5000}>
              {Array4.map((count) => (
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
        </SubSectionGroup>
      </Wrapper>
    </Root>
  );
}

const Root = styled.main`
  background-color: #eee;
  min-height: 100vh;
`;

const Title = styled.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`;

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
  margin: 16px;
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
      width: 300px;
      height: 225px;
    }
  }
`;

export default TopPage;
