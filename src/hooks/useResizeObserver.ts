import { useEffect, useState } from 'react';
import { audit } from 'src/utils/function';

type ResizeObserverSizeObject = {
  blockSize: number;
  inlineSize: number;
};

type ResizeObserverEntryObject = {
  borderBoxSize: ResizeObserverSizeObject | null;
  contentBoxSize: ResizeObserverSizeObject | null;
  contentRect: DOMRectReadOnly | null;
  devicePixelContentBoxSize: ResizeObserverSizeObject | null;
};

const toResizeObserverSizeObject = (
  size: Readonly<ResizeObserverSize[] | ResizeObserverSize>,
): ResizeObserverSizeObject | null => {
  const [head] = size instanceof Array ? size : [size];
  if (!head) {
    return null;
  }
  return {
    blockSize: head.blockSize,
    inlineSize: head.inlineSize,
  };
};
type Options = {
  duration: number;
};

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  { duration }: Options = { duration: 50 },
) {
  const [state, setState] = useState<ResizeObserverEntryObject | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const update = audit((entry: ResizeObserverEntry) => {
      setState({
        borderBoxSize: toResizeObserverSizeObject(entry.borderBoxSize),
        contentBoxSize: toResizeObserverSizeObject(entry.contentBoxSize),
        contentRect: entry.contentRect,
        devicePixelContentBoxSize: toResizeObserverSizeObject(
          entry.devicePixelContentBoxSize,
        ),
      });
    }, duration);

    const callback: ResizeObserverCallback = (entries) => {
      const target = entries.find((entry) => entry.target === ref.current);
      if (!target) {
        return;
      }

      update(target);
    };

    const element = ref.current;
    const observer = new ResizeObserver(callback);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [duration, ref]);

  return state;
}
