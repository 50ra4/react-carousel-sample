import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  ResizeObserverEntryObject,
  useResizeObserver,
} from 'src/hooks/useResizeObserver';
import { PageTemplate } from 'src/presentation/PageTemplate';
import { audit } from 'src/utils/function';

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

const resizeObserverSize2NameSizeArray = (size: ResizeObserverSize) => {
  const { blockSize, inlineSize } = size;
  return toNameSize({ blockSize, inlineSize });
};

function ObservedBox({
  className,
  ...props
}: {
  className?: string;
} & Props) {
  const ref = useRef(null);
  const [state, setState] = useState<ResizeObserverEntryObject | null>(null);

  const callback = useMemo(() => audit(setState, 100), []);

  useResizeObserver({ ref, callback });

  const definitionList = useMemo((): Definition[] => {
    if (!state) {
      return [];
    }

    const borderBoxSize = state.borderBoxSize
      ? {
          title: 'borderBoxSize',
          list: resizeObserverSize2NameSizeArray(state.borderBoxSize),
        }
      : null;
    const contentBoxSize = state.contentBoxSize
      ? {
          title: 'contentBoxSize',
          list: resizeObserverSize2NameSizeArray(state.contentBoxSize),
        }
      : null;
    const contentRect = state.contentRect
      ? {
          title: 'contentBoxSize',
          list: toNameSize(state.contentRect.toJSON()),
        }
      : null;
    const devicePixelContentBoxSize = state.devicePixelContentBoxSize
      ? {
          title: 'devicePixelContentBoxSize',
          list: resizeObserverSize2NameSizeArray(
            state.devicePixelContentBoxSize,
          ),
        }
      : null;

    return [
      borderBoxSize,
      contentBoxSize,
      contentRect,
      devicePixelContentBoxSize,
    ].filter((v): v is NonNullable<typeof v> => !!v);
  }, [state]);

  return (
    <Container {...props} ref={ref} className={className}>
      <p>box-sizing: {props.contentBox ? 'content-box' : 'border-box'}</p>
      <div>
        {definitionList.map(({ title, list }) => (
          <DefinitionSection key={title} title={title} list={list} />
        ))}
      </div>
    </Container>
  );
}

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

  & > div {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 -8px -8px 0;

    & > * {
      margin: 0 8px 8px 0;
      width: calc(1280px / 2);
    }
  }
`;

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

export default ResizeObserverPage;
