console.log([]);

console.log(
  Array.prototype.toString.call([
    [1, 3],
    [2, 4],
  ])
); //  1,3,2,4
console.log(
  Array.prototype.toString.call([
    [
      [1, 3],
      [2, 4],
    ],
    [5, 7],
  ])
);

console.log([1,2,3,4,5].join())
