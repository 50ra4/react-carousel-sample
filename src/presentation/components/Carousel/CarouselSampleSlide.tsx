import React from 'react';
import styled from 'styled-components';

export function CarouselSampleSlide({
  className,
  count,
}: {
  className?: string;
  count: number;
}) {
  return (
    <Root className={className} even={count % 2 === 0}>
      <span>{count}</span>
    </Root>
  );
}

const Root = styled.div<{ even: boolean }>`
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
