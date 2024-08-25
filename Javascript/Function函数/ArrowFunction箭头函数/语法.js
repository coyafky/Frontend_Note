// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// (a, b, ...r) => expression
// (a = 400, b = 20, c) => expression
// ([a, b] = [10, 20]) => expression
// ({ a, b } = { a: 10, b: 20 }) => expression

// async param => expression
// async (param1, param2, ...paramN) => {
//   statements
// }

// 传统匿名函数
(function (a) {
    return a + 100;
  });
  
  // 1. 移除“function”，并将箭头放置于参数和函数体起始大括号之间
  (a) => {
    return a + 100;
  };
  
  // 2. 移除代表函数体的大括号和“return”——返回值是隐含的
  (a) => a + 100;
  
  // 3. 移除参数周围的括号
  a => a + 100;

  // 传统匿名函数
(function (a, b) {
    return a + b + 100;
  });
  
  // 箭头函数
  (a, b) => a + b + 100;
  
  const a = 4;
  const b = 2;
  
  // 传统无参匿名函数
  (function () {
    return a + b + 100;
  });
  
  // 无参箭头函数
  () => a + b + 100;


  // 传统匿名函数
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
  });
  
  // 箭头函数
  (a, b) => {
    const chuck = 42;
    return a + b + chuck;
  };

  // 传统函数
function bob(a) {
    return a + 100;
  }
  
  // 箭头函数
  const bob2 = (a) => a + 100;