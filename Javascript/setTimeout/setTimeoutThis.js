const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // 输出 "zero,one,two"
myArray.myMethod(1); // 输出 "one"
