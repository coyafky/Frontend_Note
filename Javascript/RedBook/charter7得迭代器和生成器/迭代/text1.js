let arr = ["foo", "bar"];

console.log(arr[Symbol.iterator]());

let iter = arr[Symbol.iterator]();
console.log(iter);

console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }
