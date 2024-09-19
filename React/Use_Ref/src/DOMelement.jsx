import React, { useRef } from 'react';

export const InputFocus: React.FC = () => {
  // 1. 创建 ref 引用
  const iptRef = useRef<HTMLInputElement>(null);

  const getFocus = () => {
    // 3. 调用 focus API，让文本框获取焦点
    iptRef.current?.focus();
  };

  return (
    <>
      {/* 2. 绑定 ref 引用 */}
      <input type="text" ref={iptRef} />
      <button onClick={getFocus}>点击获取焦点</button>
    </>
  );
};