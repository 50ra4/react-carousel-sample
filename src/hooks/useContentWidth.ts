import React, { useState, useEffect, useRef, useCallback } from 'react';

export function useContentWidth<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  const [width, setWidth] = useState<number | null>(null);
  const perviousWidth = useRef(0);

  const updatedWidth = useCallback((width: number) => {
    if (width === perviousWidth.current) {
      return;
    }
    // TODO: add throttle
    console.log(`current width: ${width}px`);
    setWidth(width);
    perviousWidth.current = width;
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        updatedWidth(entry.contentRect.width);
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
