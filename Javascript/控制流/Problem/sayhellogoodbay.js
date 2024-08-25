function sayHelloBye(name, num) {
    // Capitalize the first letter of the name
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    
    // Return "Hello" + name if num is 1, otherwise return "Bye" + name
    return num === 1 ? `Hello ${capitalized}` : `Bye ${capitalized}`;
  }
  
  // Test cases
  console.log(sayHelloBye("alon", 1)); // ➞ "Hello Alon"
  console.log(sayHelloBye("Tomi", 0)); // ➞ "Bye Tomi"
  console.log(sayHelloBye("jose", 0)); // ➞ "Bye Jose"