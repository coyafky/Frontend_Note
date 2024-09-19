import React, { useState, useEffect } from 'react';

function ClearEvent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 返回一个清理函数，用于移除事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div>
        <p>Window Width: {windowWidth}px</p>
      </div>
    </>
  );
}

export default ClearEvent;
