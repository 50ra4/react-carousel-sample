import React from 'react';
import styled from 'styled-components';

type CarouselProps = {
  className?: string;
};

export function Carousel({ className }: CarouselProps) {
  return <Root className={className}>Carousel</Root>;
}

const Root = styled.div``;
