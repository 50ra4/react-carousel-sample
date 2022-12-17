import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useResizeObserver } from 'src/hooks/useResizeObserver';
import { PageTemplate } from 'src/presentation/PageTemplate';

function ResizeObserverPage() {
  return (
    <PageTemplate title="ResizeObserver">
      <ObservedBox color="lemonchiffon" />
      <ObservedBox color="lavender" contentBox={true} />
    </PageTemplate>
  );
}

type Props = {
  color: 'lemonchiffon' | 'lavender';
  contentBox?: boolean;
};

const toNameSize = <T extends Record<string, number>>(obj: T) =>
  Object.entries(obj).map(([name, size]) => ({ name, size }));

function ObservedBox({
  className,
  ...props
}: {
  className?: string;
} & Props) {
  const ref = useRef(null);
  const entry = useResizeObserver(ref, { duration: 100 });

  const definitionList = useMemo((): Definition[] => {
    if (!entry) {
      return [];
    }

    const borderBoxSize = entry.borderBoxSize
      ? { title: 'borderBoxSize', list: toNameSize(entry.borderBoxSize) }
      : null;
    const contentBoxSize = entry.contentBoxSize
      ? {
          title: 'contentBoxSize',
          list: toNameSize(entry.contentBoxSize),
        }
      : null;
    const contentRect = entry.contentRect
      ? {
          title: 'contentBoxSize',
          list: toNameSize(entry.contentRect.toJSON()),
        }
      : null;
    const devicePixelContentBoxSize = entry.devicePixelContentBoxSize
      ? {
          title: 'devicePixelContentBoxSize',
          list: toNameSize(entry.devicePixelContentBoxSize),
        }
      : null;

    return [
      borderBoxSize,
      contentBoxSize,
      contentRect,
      devicePixelContentBoxSize,
    ].filter((v): v is NonNullable<typeof v> => !!v);
  }, [entry]);

  return (
    <Container {...props} ref={ref} className={className}>
      <p>box-sizing: {props.contentBox ? 'content-box' : 'border-box'}</p>
      {definitionList.map(({ title, list }) => (
        <DefinitionSection key={title} title={title} list={list} />
      ))}
    </Container>
  );
}

type Definition = { title: string; list: { name: string; size: number }[] };

function DefinitionSection({ title, list }: Definition) {
  if (!list.length) {
    return null;
  }

  return (
    <StyledSection>
      <h3>{title}</h3>
      <dl>
        {list.map(({ name, size }) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{size}</dd>
          </div>
        ))}
      </dl>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: 8px 0;

  & > h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  & > dl {
    border: 1px solid #000;
    & > div {
      display: flex;
      & > * {
        padding: 2px 4px;
      }

      & > dt {
        min-width: 120px;
        margin-right: 10px;
      }
      & > dd {
        border-left: 1px solid #000;
        text-align: right;
      }
    }
    & > div + div {
      border-top: 1px solid #000;
    }
  }
`;

const Container = styled.div<Props>`
  width: 90%;
  padding: 10px 15px 20px 5px;
  box-sizing: ${({ contentBox }) =>
    contentBox ? 'content-box' : 'border-box'};
  & > * {
    box-sizing: border-box;
  }
  border: 5px solid #000;
  background-color: ${({ color }) => color};
  margin-top: 8px;

  & > p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

export default ResizeObserverPage;
