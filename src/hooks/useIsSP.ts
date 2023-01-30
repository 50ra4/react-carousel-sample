import { useContentWidth } from './useContentWidth';

export function useIsSP() {
  const width = useContentWidth(undefined);
  return (width ?? 0) <= 400;
}
