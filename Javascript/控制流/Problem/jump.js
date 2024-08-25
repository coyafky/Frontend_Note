function hurdleJump(hurdles, jumpHeight) {
    // Iterate through each hurdle in the array
    for (let i = 0; i < hurdles.length; i++) {
      // Check if the jump height is less than the current hurdle height
      if (jumpHeight < hurdles[i]) {
        // If any hurdle is too high, return false
        return false;
      }
    }
    // If all hurdles are cleared or there are no hurdles, return true
    return true;
  }
  
  // Test cases
  console.log(hurdleJump([1, 2, 3, 4, 5], 5)); // ➞ true
  console.log(hurdleJump([5, 5, 3, 4, 5], 3)); // ➞ false
  console.log(hurdleJump([5, 4, 5, 6], 10)); // ➞ true
  console.log(hurdleJump([1, 2, 1], 1)); // ➞ false
  console.log(hurdleJump([], 5)); // ➞ true (edge case with an empty array)