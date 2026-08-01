/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @returns {(...args: Array<unknown>) => unknown}
 */
export default function curry(func: Function): Function {
  console.log("Entering curry");
  return function curried(this: any, ...args: Array<any>) {
    console.log("Entering curried...");
    if (args.length >= func.length) {
      console.log("Entering curried... If Condition");
      // Once enough arguments have been collected, execute the original function with the same receiver.
      return func.apply(this, args);
    }
    console.log("Entering Return");
    return (arg: any) => {
      console.log("Entering curried... Return Statement");
      return arg === undefined
        ? // Empty calls keep the chain alive without changing the collected arguments.
          curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
    };
  };
}
function funcMul(a: number, b: number) {
  return a * b;
}
const curried = curry(funcMul);

const step1 = curried(2);

const step2 = curried();

const step3 = step2(3);

const result = step3();

console.log(result);
