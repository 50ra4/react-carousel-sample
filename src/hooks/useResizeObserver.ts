import { useEffect } from 'react';

export type ResizeObserverEntryObject = {
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

export function useResizeObserver<T extends HTMLElement = HTMLElement>({
  ref,
  callback,
}: {
  ref?: React.RefObject<T | null>;
  callback: (value: ResizeObserverEntryObject) => void;
}) {
  useEffect(() => {
    const target = ref ? ref.current : document.body;
    if (!target) {
      return;
    }

    const callbackFn: ResizeObserverCallback = (entries) => {
      const entry = entries.find((entry) => entry.target === target);
      if (!entry) {
        return;
      }

      callback({
        borderBoxSize: toResizeObserverSize(entry.borderBoxSize),
        contentBoxSize: toResizeObserverSize(entry.contentBoxSize),
        contentRect: entry.contentRect,
        devicePixelContentBoxSize: toResizeObserverSize(
          entry.devicePixelContentBoxSize,
        ),
        target,
      });
    };

    const observer = new ResizeObserver(callbackFn);
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [callback, ref]);
}
