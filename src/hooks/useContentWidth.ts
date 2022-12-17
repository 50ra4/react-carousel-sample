import React from 'react';
import { useResizeObserver } from './useResizeObserver';

type Options = {
  duration?: number;
};

export function useContentWidth<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  { duration = 250 }: Options = {},
) {
  const result = useResizeObserver(ref, { duration });

  return (
    result?.borderBoxSize?.inlineSize ?? result?.contentRect?.width ?? null
  );
}
