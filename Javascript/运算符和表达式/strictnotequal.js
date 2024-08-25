const object1 = {
    key: "value",
  };
  
  const object2 = {
    key: "value",
  };
  
  console.log(object1 !== object2); // true
  console.log(object1 !== object1); // false
  

console.log("hello" !== "hello"); // false
console.log("hello" !== "hola"); // true

console.log(3 !== 3); // false
console.log(3 !== 4); // true

console.log(true !== true); // false
console.log(true !== false); // true

console.log(null !== null); // false
console.log(null !== undefined); // true

console.log("3" !== 3); // true
console.log(true !== 1); // true
console.log(null !== undefined); // true

