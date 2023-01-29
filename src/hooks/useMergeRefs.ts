import { useMemo } from 'react';

export type ReactRef<T> = React.ForwardedRef<T> | React.MutableRefObject<T>;

/**
 * @see https://zenn.dev/remon/articles/28af13312d55e5
 */
export function useMergeRefs<T>(refs: ReactRef<T>[]) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance: T) => {
      refs.forEach((ref) => {
        if (!ref) {
          return;
        }
        if (ref instanceof Function) {
          ref(instance);
          return;
        }
        ref.current = instance;
      });
    };
  }, [refs]);
}
