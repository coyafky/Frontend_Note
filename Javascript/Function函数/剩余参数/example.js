function fun1(...theArgs) {
  console.log(theArgs.length);
  
  }
  
  fun1(); // 弹出 "0", 因为 theArgs 没有元素
  fun1(5); // 弹出 "1", 因为 theArgs 只有一个元素
  fun1(5, 6, 7); // 弹出 "3", 因为 theArgs 有三个元素

  function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
      return multiplier * element;
    });
  }
  
  var arr = multiply(2, 1, 2, 3); 
  console.log(arr); // [2, 4, 6]


  function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  console.log(sortRestArgs(5, 3, 7, 1));
  
  
//   function sortArguments() {
//     var sortedArgs = arguments.sort(); //  arguments.sort is not a function
//     return sortedArgs; // 不会执行到这里
//   }
  
//  console.log(sortArguments(5, 3, 7, 1));
function sortArguments() {
    var args = Array.prototype.slice.call(arguments);
    var sortedArgs = args.sort();
    return sortedArgs;
  }
  console.log(sortArguments(5, 3, 7, 1)); // shows 1, 3, 5, 7