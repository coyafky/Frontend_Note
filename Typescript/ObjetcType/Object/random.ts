function printName(obj: { first: string; last?: string }) {
    // 错误 - 如果 'obj.last' 没有提供，可能会崩溃！
    // console.log(obj.last.toUpperCase());
    // 'obj.last' 可能为 'undefined'.
    if (obj.last !== undefined) {
      // 正确
      console.log(obj.last.toUpperCase());
    }
  
    // 使用现代 JavaScript 语法的一种安全替代方案：
    console.log(obj.last?.toUpperCase());
  }

// 两种情况都正确
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });