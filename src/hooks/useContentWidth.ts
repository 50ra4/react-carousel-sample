import React, { useCallback, useMemo, useState } from 'react';
import {
  ResizeObserverEntryObject,
  useResizeObserver,
} from './useResizeObserver';
import { audit } from 'src/utils/function';

type Options = {
  duration?: number;
};

export function useContentWidth<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  { duration = 250 }: Options = {},
) {
  const [state, setState] = useState<ResizeObserverEntryObject | null>(null);

  const callback = useMemo(() => audit(setState, duration), [duration]);

  useResizeObserver({ ref, callback });

  return state?.borderBoxSize?.inlineSize ?? state?.contentRect?.width ?? null;
}
