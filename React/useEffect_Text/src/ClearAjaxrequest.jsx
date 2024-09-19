import React, { useState, useEffect } from 'react';

const FetchComponent: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://api.example.com/data', { signal })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('请求被终止：', error.message));

    // 返回一个清理函数，用于终止未完成的请求
    return () => controller.abort();
  }, []);

  return (
    <div>{data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}</div>
  );
};

export default FetchComponent;
