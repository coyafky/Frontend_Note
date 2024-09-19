// src/App.js
import React from 'react';
import Timer from './Timer'; // 导入 Timer 组件

function App() {
  return (
    <div className="App">
      <h1>My Timer App</h1>
      <Timer /> {/* 渲染 Timer 组件 */}
    </div>
  );
}

export default App;
