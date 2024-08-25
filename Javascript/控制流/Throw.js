function divide(a, b) {
    if (b === 0) {
      throw new Error("除数不能为零");
    }
    return a / b;
  }