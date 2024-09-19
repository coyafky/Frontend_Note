import React, { useState, useRef } from 'react';

export const Counter: React.FC = () => {
  // 默认值为 0
  const [count, setCount] = useState(0);

  // 默认值为 undefined
  const prevCountRef = useRef<number>();

  const add = () => {
    // 点击按钮时，让 count 值异步 +1
    setCount((c) => c + 1);
    // 同时，把 count 所代表的旧值记录到 prevCountRef 中
    prevCountRef.current = count;
  };

  return (
    <>
      <h1>
        新值是：{count}，旧值是：{prevCountRef.current}
      </h1>
      <button onClick={add}>+1</button>
    </>
  );
};