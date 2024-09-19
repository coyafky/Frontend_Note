import React, { useState, useRef } from 'react';

export const RefTimer3: React.FC = () => {
  const [count, setCount] = useState(0);
  const time = useRef(Date.now());

  console.log('组件被渲染了');

  return (
    <>
      <h3>
        count值是：{count}, 时间戳是：{time.current}
      </h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </>
  );
};