// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Func = (...args: any[]) => any;

export function throttle<Fn extends Func>(fn: Fn, interval: number) {
  let lastUpdatedAt = -1;

  return (...params: Parameters<Fn>) => {
    const nextUpdatedAt = lastUpdatedAt + interval;
    const currentAt = +new Date();

    if (currentAt < nextUpdatedAt) {
      return;
    }

    lastUpdatedAt = currentAt;
    fn(...params);
  };
}

export function debounce<Fn extends Func>(fn: Fn, interval: number) {
  let timer: number | undefined;

  return (...params: Parameters<Fn>) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn(...params);
    }, interval);
  };
}

export function audit<Fn extends Func>(fn: Fn, interval: number) {
  let timer: number | undefined;
  let firstCalledAt: number | undefined = undefined;

  return (...params: Parameters<Fn>) => {
    clearTimeout(timer);

    const current = +new Date();
    if (!firstCalledAt) {
      firstCalledAt = current;
    }
    const rest = interval - (current - firstCalledAt);

    timer = window.setTimeout(() => {
      fn(...params);
      firstCalledAt = undefined;
    }, rest);
  };
}
