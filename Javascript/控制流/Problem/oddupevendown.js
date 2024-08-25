function transform(arr) {
    // Use the map function to iterate over each element in the array
    return arr.map(num => {
      // Check if the number is odd
      if (num % 2 !== 0) {
        // Increment the number by 1 if it's odd
        return num + 1;
      } else {
        // Decrement the number by 1 if it's even
        return num - 1;
      }
    });
  }
  
  // Test cases
  console.log(transform([1, 2, 3, 4, 5])); // ➞ [2, 1, 4, 3, 6]
  console.log(transform([3, 3, 4, 3])); // ➞ [4, 4, 3, 4]
  console.log(transform([2, 2, 0, 8, 10])); // ➞ [1, 1, -1, 7, 9]