const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
  };
  
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`属性名: ${key}, 属性值: ${person[key]}`);
      // 在这里可以对属性值进行操作，例如修改、删除或其他操作
    }
  }

//  属性名: name, 属性值: Alice
// 属性名: age, 属性值: 30
// 属性名: gender, 属性值: female