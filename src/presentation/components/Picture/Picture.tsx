import React from 'react';
import styled from 'styled-components';

export function Picture({
  className,
  src,
  caption,
}: {
  className?: string;
  src: string;
  caption: string;
}) {
  return (
    <ImageWrapper className={className}>
      <div />
      <img src={src} alt={caption} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  & > div {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1) inset;
  }

  & > img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
