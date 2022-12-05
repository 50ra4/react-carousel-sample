// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => any;

export function throttle<Fn extends Callback>(callback: Fn, interval: number) {
  return (...params: Parameters<Fn>) => {
    // do nothing
  };
}

export function debounce<Fn extends Callback>(callback: Fn, interval: number) {
  return (...params: Parameters<Fn>) => {
    // do nothing
  };
}
