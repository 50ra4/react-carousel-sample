import { useEffect, useState } from 'react';

export function useMediaQuery(
  queryString: string,
  callback: (value: boolean) => void,
): void {
  useEffect(() => {
    const mediaQueryList = window.matchMedia(queryString);
    const listener = (ev: MediaQueryListEventMap['change']) => {
      callback(ev.matches);
    };
    mediaQueryList.addEventListener('change', listener);

    // because onchange is not executed the first time
    callback(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [callback, queryString]);
}

export function useIsSP(): boolean | null {
  const [isSP, setIsSP] = useState<boolean | null>(null);
  useMediaQuery('screen and (max-width: 400px', setIsSP);

  return isSP;
}
