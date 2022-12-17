import React, { useMemo, useRef, useState } from 'react';
import {
  ResizeObserverEntryObject,
  useResizeObserver,
} from './useResizeObserver';
import { audit } from 'src/utils/function';

type Options = {
  duration?: number;
};

const toWidth = ({ borderBoxSize, contentRect }: ResizeObserverEntryObject) =>
  borderBoxSize?.inlineSize ?? contentRect?.width ?? null;

export function useContentWidth<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  { duration = 250 }: Options = {},
) {
  const [width, setWidth] = useState<number | null>(null);
  const previousWidth = useRef(0);

  const callback = useMemo(
    () =>
      audit((entry: ResizeObserverEntryObject) => {
        const width = toWidth(entry);
        if (!width) {
          return;
        }
        if (previousWidth.current === width) {
          return;
        }
        previousWidth.current = width;
        setWidth(width);
      }, duration),
    [duration],
  );

  useResizeObserver({ ref, callback });

  return width;
}
