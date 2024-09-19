import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  // 使用 useCallback 缓存 handleIncrement 函数
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // 使用 useCallback 缓存 handleToggleTheme 函数
  const handleToggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div className={`container ${theme}`}>
      <h1>App Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <ChildComponent onIncrement={handleIncrement} onToggleTheme={handleToggleTheme} />
    </div>
  );
}

export default App;