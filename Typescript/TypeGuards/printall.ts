function printAll(strs: string | string[] | null) {
    if (strs === null) {
      // 如果 strs 为 null，不做任何操作
      return;
    } else if (typeof strs === "object") {
      // 如果 strs 是一个数组，则遍历并打印每个元素
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      // 如果 strs 是一个字符串，则直接打印
      console.log(strs);
    }
  }