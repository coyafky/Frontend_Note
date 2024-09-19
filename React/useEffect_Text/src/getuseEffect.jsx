import { useEffect, useState } from 'react';

function GetuseEffect() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log(document.querySelector('h1')?.innerHTML);
  }, [count]);

  const add = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>count 值为：{count}</h1>
      <p>flag 的值为：{String(flag)}</p>
      <button onClick={add}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
    </>
  );
}

export default GetuseEffect;
