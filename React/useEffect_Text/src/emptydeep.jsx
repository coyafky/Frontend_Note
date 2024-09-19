import React, { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  // 仅在组件首次渲染完成后，会执行 effect 中的回调函数
  useEffect(() => {
    console.log(document.querySelector('h1')?.innerHTML);
  }, []);

  return (
    <>
      <h1>count 值为：{count}</h1>
      <button onClick={add}>+1</button>
    </>
  );
};
