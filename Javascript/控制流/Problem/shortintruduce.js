function dartsScoring(x, y) {
    // Calculate the distance from the center
    const R = Math.sqrt(x * x + y * y);
    
    // Determine the score based on the distance
    if (R <= 1) {
      return 10;
    } else if (R <= 5) {
      return 5;
    } else if (R <= 10) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Test cases
  console.log(dartsScoring(0, 0)); // ➞ 10
  console.log(dartsScoring(3, 2)); // ➞ 5
  console.log(dartsScoring(0, -0.8)); // ➞ 10
  console.log(dartsScoring(7, 7)); // ➞ 1
  console.log(dartsScoring(10, 10)); // ➞ 0