function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
  
  function example2(x: unknown) {
    if (isString(x)) {
      // We can now call any 'string' method on 'x'.
      x.toUpperCase();
    } else {
      console.log(x);
    }
  }