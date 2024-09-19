import React, { useState } from 'react';

function Counter() {
  const [count, Setcount] = useState(0);

  const increment = () => {
    Setcount(count + 1);
  };

  const decrement = () => {
    Setcount(count - 1);
  };

  const reset = () => {
    Setcount(0);
  };

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Counter;
