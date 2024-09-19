import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  console.log('组件被重新渲染了');
  return (
    <>
      <h1>当前的count值是{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
}

export default Counter;
