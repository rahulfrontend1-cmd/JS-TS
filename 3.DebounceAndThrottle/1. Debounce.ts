/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(...args: Array<unknown>) => void}
 */
export default function debounce(
    func: (...args: Array<unknown>) => unknown,
    wait: number,
  ): (...args: Array<unknown>) => void {
    let timeOutId: ReturnType<typeof setTimeout> | null = null;
    return function (...args) {
      const context = this;
      clearTimeout(timeOutId ?? undefined);
      timeOutId = setTimeout(function () {
        timeOutId = null;
        func.apply(context, args);
      }, wait);
    };
  }
  