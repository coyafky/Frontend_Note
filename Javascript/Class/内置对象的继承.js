class SubArray extends Array {
    constructor(...args) {
      super(...args);
    }
  }
  
  var arr = new SubArray();
  arr[0] = 12;
  console.log(arr.length);
  // 1
  
  arr.length = 0;
  console.log(arr[0]);
  // undefined