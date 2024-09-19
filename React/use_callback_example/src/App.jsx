import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 缓存 increment 函数
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // 使用 useCallback 缓存 descrement 函数
  const descrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  // 使用 useCallback 缓存 reset 函数
  const reset = useCallback(() => {
    setCount((c) => 0);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={descrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;