import React, { useRef } from 'react';
import styled from 'styled-components';
import { PageTemplate } from 'src/presentation/PageTemplate';

function ResizeObserverPage() {
  return (
    <PageTemplate title="ResizeObserver">
      <ObservedBox />
    </PageTemplate>
  );
}

const ObservedBox = ({ className }: { className?: string }) => {
  const ref = useRef(null);

  return (
    <Container ref={ref} className={className}>
      ObservedBox
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default ResizeObserverPage;
