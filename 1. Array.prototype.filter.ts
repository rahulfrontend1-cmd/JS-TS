/**
 * @template T
 * @param {(value: T, index: number, array: Array<T>) => boolean} callbackFn
 * @param {unknown} [thisArg]
 * @returns {Array<T>}
 */
Array.prototype.myFilter = function <T>(callbackFn: (value: T,index: number,array: Array<T>) => boolean, thisArg: unknown): Array<T> {
    const len = this.length;
    const result = [];
    for(let i=0; i<len; i++) {
      const value = this[i];
      if(Object.hasOwn(this, i)) {
        if(callbackFn.call(thisArg, value, i, this)) {
          result.push(value)
        }
      }
    }
    return result;
  };