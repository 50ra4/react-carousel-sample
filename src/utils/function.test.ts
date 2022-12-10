import { throttle, debounce } from './function';

/**
 * 指定したms待つ
 */
const sleep = (ms: number) =>
  new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });

/**
 * 100msごとに21回（0ms, 100ms, 200ms, ..., 2000ms）
 */
const TIMES = Array.from({ length: 20 + 1 }).map((_, i) => i * 100);

/**
 * 関数を呼び出すms
 */
const TIMES_TO_CALL = [0, 200, 300, 900, 1000, 1100, 1200, 1300];

type TestCase = {
  ms: number;
  shouldCall: boolean;
  expected: {
    calledTimes: number;
    calledWith: number;
  };
};

/**
 * throttleのテストケース
 */
const THROTTLE_TEST_CASES = TIMES.map(
  (ms): TestCase => ({
    ms,
    shouldCall: TIMES_TO_CALL.includes(ms),
    /** 0msに1回、900msに1回、500ms間隔で実行する */
    expected: {
      calledTimes: ms < 900 ? 1 : 2,
      calledWith: ms < 900 ? 0 : 900,
    },
  }),
);

/**
 * debounceのテストケース
 */
const DEBOUNCE_TEST_CASES = TIMES.map(
  (ms): TestCase => ({
    ms,
    shouldCall: TIMES_TO_CALL.includes(ms),
    /** 800msに1回、1800msに1回、最後に呼び出した関数を500ms後に実行する */
    expected: {
      calledTimes: ms < 800 ? 0 : ms < 1800 ? 1 : 2,
      calledWith: ms < 800 ? 0 : ms < 1800 ? 300 : 1300,
    },
  }),
);

describe('utils/function', () => {
  describe.each([
    { name: 'throttle', cases: THROTTLE_TEST_CASES },
    { name: 'debounce', cases: DEBOUNCE_TEST_CASES },
  ] as const)('$name', ({ name, cases }) => {
    const callback = jest.fn((ms: number) => ms);
    const testFn = name === 'throttle' ? throttle : debounce;
    const fn = testFn(callback, 500);

    it.each(cases)(
      '$ms msのとき、引数が$expected.calledWithで$expected.calledTimes回呼び出される',
      async ({ ms, shouldCall, expected: { calledTimes, calledWith } }) => {
        // 呼び出す
        if (shouldCall) {
          fn(ms);
        }

        // 結果を確認する
        expect(callback).toBeCalledTimes(calledTimes);
        if (0 < calledTimes) {
          expect(callback).toBeCalledWith(calledWith);
        }

        // 100ms待つ
        await sleep(100);
      },
    );
  });
});
