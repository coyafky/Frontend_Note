const person = {
    name: 'Alice',
    age: 30
  };
  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  // 输出：name: Alice  age: 30
  