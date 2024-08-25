const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


const numbers = [3, 2, 4, 1, 5];
const reversed2 = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed2[0] = 5;
console.log(numbers[0]); // 5

const numbers2 = [3, 2, 4, 1, 5];
const reversed3 = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed3[0] = 5;
console.log(numbers[0]); // 5


console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
    3: 33, // ignored by reverse() since length is 3
  };
  console.log(Array.prototype.reverse.call(arrayLike));
  // { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
  // The index 2 is deleted because there was no index 0 present originally
  // The index 3 is unchanged since the length is 3
  