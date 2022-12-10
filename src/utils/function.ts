// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => any;

export function throttle<Fn extends Callback>(callback: Fn, interval: number) {
  let lastUpdatedAt = -1;

  return (...params: Parameters<Fn>) => {
    const nextUpdatedAt = lastUpdatedAt + interval;
    const currentAt = +new Date();

    if (currentAt < nextUpdatedAt) {
      return;
    }

    lastUpdatedAt = currentAt;
    callback(...params);
  };
}

export function debounce<Fn extends Callback>(callback: Fn, interval: number) {
  let timer: number | undefined;

  return (...params: Parameters<Fn>) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback(...params);
    }, interval);
  };
}

export function audit<Fn extends Callback>(callback: Fn, interval: number) {
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
      callback(...params);
      firstCalledAt = undefined;
    }, rest);
  };
}
