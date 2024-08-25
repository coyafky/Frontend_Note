function findNumber() {
    for (let x = 1; x <= 10000; x++) {
      let m = Math.sqrt(x + 100);
      let n = Math.sqrt(x + 268);
      if (Number.isInteger(m) && Number.isInteger(n)) {
        console.log("找到的整数是: " + x);
        return x;
      }
    }
    console.log("未找到符合条件的整数");
    return null;
  }
  
  findNumber();