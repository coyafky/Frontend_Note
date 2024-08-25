function fn() {
    try {
      return 1;
    } catch {
      return 2;
    } finally {
      return 3;
    }
  }
  
  console.log(fn());
  