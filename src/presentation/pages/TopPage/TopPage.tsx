import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';
import { CarouselSampleSlide } from '@/components/Carousel/CarouselSampleSlide';
import { Image } from '@/components/Image/Image';
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
      <Wrapper>
        <ResponsiveContainer>
          <StyledSubSection title="basic">
            <Carousel carouselKey="basic">
              {Array4.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </Carousel>
          </StyledSubSection>

          <StyledSubSection title="autoplay 3s">
            <Carousel carouselKey="autoplay-3s" autoplay={3000}>
              {Array4.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
              {Array4.map((count) => (
                <CarouselSampleSlide key={count} count={count + 4} />
              ))}
            </Carousel>
          </StyledSubSection>

          <StyledSubSection title="autoplay 5s">
            <Carousel carouselKey="autoplay-5s" autoplay={5000}>
              {Array4.map((count) => (
                <CarouselSampleSlide key={count} count={count} />
              ))}
            </Carousel>
          </StyledSubSection>

          <StyledSubSection title="images">
            <Carousel carouselKey="images">
              {IMAGE_LIST.map(({ src, caption }) => (
                <Image key={src} src={src} caption={caption} />
              ))}
            </Carousel>
          </StyledSubSection>
        </ResponsiveContainer>
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
  width: 300px;
`;

const Wrapper = styled.div`
  margin: 16px;
`;

const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${StyledSubSection} {
    margin: 0 8px 8px 0;
  }
`;

export default TopPage;
