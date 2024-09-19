import { useState } from 'react';

function AsynchronousChangeStatus() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h1>当前的count值是{count}</h1>
      <button onClick={add}>+1</button>
    </>
  );
}

export default AsynchronousChangeStatus;
