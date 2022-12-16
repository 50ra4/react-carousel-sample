import { useEffect, useState } from 'react';
import { audit } from 'src/utils/function';

type ResizeObserverEntryObject = {
  borderBoxSize: ResizeObserverSize | null;
  contentBoxSize: ResizeObserverSize | null;
  contentRect: DOMRectReadOnly | null;
  devicePixelContentBoxSize: ResizeObserverSize | null;
};

const toResizeObserverSize = (
  size: Readonly<ResizeObserverSize[] | ResizeObserverSize>,
): ResizeObserverSize | null =>
  Array.isArray(size) ? size?.[0] ?? null : size;

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
        borderBoxSize: toResizeObserverSize(entry.borderBoxSize),
        contentBoxSize: toResizeObserverSize(entry.contentBoxSize),
        contentRect: entry.contentRect,
        devicePixelContentBoxSize: toResizeObserverSize(
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

  // TODO: remove
  useEffect(() => {
    console.log(state);
  }, [state]);

  return state;
}
