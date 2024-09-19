import React, { useState } from 'react';

function PropsAndState() {
  const [greeting, setGreeting] = useState('welcome to  React');
  const handleGreeting = () => {
    setGreeting('hello world');
  };
  return (
    <div>
      <button onClick={handleGreeting}>Change Greeting</button>
      <ChildComponent text={greeting} />
    </div>
  );
}
const ChildComponent = ({ text }) => {
  // 错误：不能修改 props
  // text = 'Hello World';

  // 正确：从 props 派生新值
  const newText = `${text}!`;

  return <h1>{newText}</h1>;
};

export default PropsAndState;
