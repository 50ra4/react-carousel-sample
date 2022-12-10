import React, { useRef } from 'react';
import styled from 'styled-components';
import { useContentWidth } from 'src/hooks/useContentWidth';
import { PageTemplate } from 'src/presentation/PageTemplate';

const WIDTH_LIST = Array.from({ length: 11 })
  .map((_, i) => (i + 1) * 100 + 220)
  .reverse();

function ContentWidthPage() {
  return (
    <PageTemplate title="Check useContentWidth">
      {WIDTH_LIST.map((width) => (
        <ContentWidthBlock key={width} maxWidth={width} />
      ))}
    </PageTemplate>
  );
}

function ContentWidthBlock({ maxWidth: maxWidth }: { maxWidth: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const contentWidth = useContentWidth(ref);
  return (
    <StyledBlock ref={ref} max={maxWidth}>
      width: {contentWidth}px
    </StyledBlock>
  );
}

const StyledBlock = styled.div<{ max: number }>`
  height: 100px;
  width: 100%;
  max-width: ${({ max }) => max}px;

  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 36px;

  margin-top: 16px;
`;

export default ContentWidthPage;
