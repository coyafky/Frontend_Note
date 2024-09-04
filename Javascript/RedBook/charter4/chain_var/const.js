const a; // SyntaxError: 常量声明时没有初始化 
const b = 3; console.log(b); // 3 b = 4; // TypeError: 给常量赋值


//  const声明只应用到顶级原语或者对象。换句话说，赋值为对象的 const变量不能再被重新赋值为其他引用值，但对象的键则不受限 制

// 标识符查找

var color=“