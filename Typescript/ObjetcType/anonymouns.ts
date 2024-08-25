
//在 JavaScript 中，我们分组和传递数据的基本方式是通过对象。在 TypeScript 中，我们通过对象类型来表示这些。 它们可以是匿名的：
function greet2(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }