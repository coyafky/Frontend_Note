import { useState } from 'react';

function AsyncData() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    for (let i = 0; i <= 3; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementHandler}>Increment by 3</button>
    </div>
  );
}

export default AsyncData;
