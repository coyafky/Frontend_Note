function hasValidUnitOfMeasure(product) {
    const { unitOfMeasure, comment = "" } = product;
    return (unitOfMeasure === "L" || unitOfMeasure === "PCE" || comment !== "");
  }
  
  // Test cases
  console.log(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" })); // ➞ true
  console.log(hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" })); // ➞ false
  console.log(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false })); // ➞ false
  console.log(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" })); // ➞ false
  console.log(hasValidUnitOfMeasure({ "product": "Eggs", unitOfMeasure: "PCE", comment: "Fresh" })); // ➞ true