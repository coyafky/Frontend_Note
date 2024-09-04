function double(value) {
  setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}
double(3); // 6（大约1000毫秒之后）

// 假设setTimeout操作会返回一个有用的值。有什么好办法把这个值 传给需要它的地方？广泛接受的一个策略是给异步操作提供一个回 调，这个回调中包含要使用异步返回值的代码

function double(value, callback) {
  setTimeout(() => callback(value * 2), 1000);
}
double(3, (x) => console.log(`I was given: ${x}`)); // I was given: 6（大约1000毫秒之

//  失败处理 异步操作的失败处理在回调模型中也要考虑，因此自然就出现了成 功回调和失败回调

function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== "number") {
        throw "Must provide number as first argument";
      }
      success(2 * value);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}
const successCallback = (x) => console.log(`Success: ${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);
double(3, successCallback, failureCallback);
double("b", successCallback, failureCallback);
// Success: 6（大约1000毫秒之后）
// Failure: Must provide number as first argument（大约1000毫秒之后）

//  嵌套异步回调

function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== "number") {
        throw "Must provide number as first argument";
      }
      success(2 * value);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}
const successCallback2 = (x) => {
  double(x, (y) => console.log(`Success: ${y}`));
};
const failureCallback2 = (e) => console.log(`Failure: ${e}`);
double(3, successCallback2, failureCallback2); // Success: 12（大约1000毫秒之后）
