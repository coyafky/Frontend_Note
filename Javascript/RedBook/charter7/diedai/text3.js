//迭代器并不与可迭代对象某个时刻的快照绑定，而仅仅是使用游标来记 录遍历可迭代对象的历程。如果可迭代对象在迭代期间被修改了，那么 迭代器也会反映相应的变化
let arr = ["foo", "baz"];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { done: false, value: 'foo' }
// 在数组中间插入值
arr.splice(1, 0, "bar");
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: false, value: 'baz' }
console.log(iter.next()); // { done: true, value: undefined }


