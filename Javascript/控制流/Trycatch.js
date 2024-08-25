try {
    const result = 10 / 0; // 尝试执行会引发错误的代码
  } catch (error) {
    console.error(error.name); // 输出：Error
    console.error(error.message); // 输出：除数不能为零
    console.error(error.stack); // 输出：错误堆栈跟踪
  }