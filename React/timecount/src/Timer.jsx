import React, { useState, useEffect } from 'react';

function Timer() {
  // 使用 useState 钩子来管理时间状态，初始值为 0
  const [time, setTime] = useState(0);

  // 使用 useState 钩子来管理计时器是否运行的状态，初始值为 false
  const [isRunning, setIsRunning] = useState(false);

  // 使用 useEffect 钩子来处理计时器的启动和停止
  useEffect(() => {
    let interval;

    // 如果计时器正在运行，启动一个定时器，每秒更新一次时间
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // 当组件卸载或 isRunning 状态改变时，清除定时器
    return () => clearInterval(interval);
  }, [isRunning]); // 依赖项为 isRunning，当 isRunning 改变时，useEffect 会重新执行

  // 处理按钮点击事件
  const handleClick = () => {
    // 切换计时器运行状态
    setIsRunning((prevIsRunning) => !prevIsRunning);

    // 如果计时器开始，重置时间为 0
    if (!isRunning) {
      setTime(0);
    }
  };

  // 渲染组件
  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={handleClick}>{isRunning ? 'Pause' : 'Start'}</button>
    </div>
  );
}

export default Timer;
