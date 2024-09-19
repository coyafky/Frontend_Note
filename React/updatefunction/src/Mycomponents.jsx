import React, { useState } from 'react';

function Mycomponents() {
  const [count, setCount] = useState(0);
  function increment() {
    // setCount(count + 1);
    setCount((c) => c + 1);
  }
  function descrement() {
    // setCount(count - 1);
    setCount((c) => c - 1);
  }
  function reset() {
    // setCount(0);
    setCount((c) => (c = 0));
  }

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={descrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Mycomponents;
