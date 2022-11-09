import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';
import { CarouselSampleSlide } from '@/components/Carousel/CarouselSampleSlide';
import { SubSection } from '@/components/SubSection/SubSection';

const Array4 = Array.from({ length: 4 }).map((_, i) => i + 1);

function TopPage() {
  return (
    <Root>
      <ResponsiveContainer>
        <Title>Carousel Sample</Title>
        <StyledSubSection title="basic">
          <Carousel carouselKey="basic">
            {Array4.map((count) => (
              <CarouselSampleSlide key={count} count={count} />
            ))}
          </Carousel>
        </StyledSubSection>

        <StyledSubSection title="multiple children">
          <Carousel carouselKey="multiple">
            {Array4.map((count) => (
              <CarouselSampleSlide key={count} count={count} />
            ))}
            {Array4.map((count) => (
              <CarouselSampleSlide key={count + 4} count={count + 4} />
            ))}
          </Carousel>
        </StyledSubSection>

        <StyledSubSection title="autoplay 3s">
          <Carousel carouselKey="autoplay-3s" autoplay={3000}>
            {Array4.map((count) => (
              <CarouselSampleSlide key={count} count={count} />
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
      </ResponsiveContainer>
    </Root>
  );
}

const Root = styled.main`
  background-color: #eee;
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
  margin-top: 8px;
`;

const ResponsiveContainer = styled.div`
  max-width: 400px;
  @media (min-width: 400px) {
    margin: 0 auto;
  }
`;

export default TopPage;
