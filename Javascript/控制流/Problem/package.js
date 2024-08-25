function getContainer(product) {
    switch (product) {
      case "Bread":
        return "bag";
      case "Beer":
        return "bottle";
      case "Candy":
        return "plastic";
      default:
        return null;
    }
  }
  
  // Test examples
  console.log(getContainer("Bread")); // ➞ "bag"
  console.log(getContainer("Beer")); // ➞ "bottle"
  console.log(getContainer("Candy")); // ➞ "plastic"
  console.log(getContainer("Cheese")); // ➞ null