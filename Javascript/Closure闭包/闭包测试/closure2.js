function counter() {
    var count = 0;
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }
  var c = counter();
  c.increment();
  console.log(c.getCount()); // 输出 1
  
  
  
  