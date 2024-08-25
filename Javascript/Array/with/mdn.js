const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]


// const arr = [1, , 3, 4, , 6];
// console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]


const arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3, // ignored by with() since length is 3
  };
  console.log(Array.prototype.with.call(arrayLike, 0, 1));
  // [ 1, undefined, 4 ]
  