import React, { useState, useEffect, useRef, useCallback } from 'react';
import { audit } from 'src/utils/function';

export function useContentWidth<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  const [width, setWidth] = useState<number | null>(null);
  const perviousWidth = useRef(0);

  const updatedWidth = useCallback((width: number) => {
    if (width === perviousWidth.current) {
      return;
    }
    setWidth(width);
    perviousWidth.current = width;
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const update = audit(updatedWidth, 250);
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        update(entry.contentRect.width);
      });
    };

    const element = ref.current;
    const observer = new ResizeObserver(callback);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, updatedWidth]);

  return width;
}
