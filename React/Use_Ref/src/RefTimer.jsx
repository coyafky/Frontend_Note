import React, { useState, useRef, useEffect } from 'react';

export const RefTimer: React.FC = () => {
  const [count, setCount] = useState(0);
  const time = useRef(Date.now());

  const updateTime = () => {
    time.current = Date.now();
    console.log(time.current);
  };

  console.log('组件被渲染了');

  useEffect(() => {
    console.log('time 的值发生了变化：' + time.current);
  }, [time.current]);

  return (
    <>
      <h3>
        count值是：{count}, 时间戳是：{time.current}
      </h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={updateTime}>给ref赋新值</button>
    </>
  );
};