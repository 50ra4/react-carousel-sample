import styled from 'styled-components';

export const CarouselSampleSlide = styled.div<{ even?: boolean }>`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({ even }) => (even ? '#99f' : '#f99')};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
`;
