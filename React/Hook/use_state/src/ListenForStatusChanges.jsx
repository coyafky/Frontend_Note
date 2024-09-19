import { useEffect, useState } from 'react';

function ListenForStatusChanges() {
  // 使用了 useEffect来在组件渲染后执行副作用操作

  const [count, setCount] = useState(() => 0);
  const add = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  return (
    <>
      <h1>当前的 count 值为：{count}</h1>
      <button onClick={add}>+1</button>
    </>
  );
}

export default ListenForStatusChanges;
