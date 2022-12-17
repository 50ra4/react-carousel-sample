import { useEffect, useState } from 'react';
import { audit } from 'src/utils/function';

type ResizeObserverEntryObject = {
  borderBoxSize: ResizeObserverSize | null;
  contentBoxSize: ResizeObserverSize | null;
  contentRect: DOMRectReadOnly | null;
  devicePixelContentBoxSize: ResizeObserverSize | null;
  target: HTMLElement;
};

const toResizeObserverSize = (
  size: Readonly<ResizeObserverSize[]> | ResizeObserverSize,
): ResizeObserverSize | null => {
  const [head] = size instanceof ResizeObserverSize ? [size] : size;
  return !head ? null : head;
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
    const target = ref.current;
    if (!target) {
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
        target,
      });
    }, duration);

    const callback: ResizeObserverCallback = (entries) => {
      const targetEntry = entries.find((entry) => entry.target === target);
      if (!targetEntry) {
        return;
      }

      update(targetEntry);
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
