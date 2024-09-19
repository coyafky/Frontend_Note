import React, { useState, useEffect } from 'react';

function Mycomponents() {
  const [count, setCount] = useState(0);
  const [color,setColor] = useState('green');
  useEffect(() => {
    document.title = `Count:${count}`;
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);

  }

  function Subtrat(){
    setCount((c)=>c-1);
  }

  function changeColor(){
    setColor((color)=>{color})
  }

  return (
  <div>
    <p>Count:{count}</p>
    <button onClick={addCount}>Add</button>
    <br />
    <button onClick={Subtrat}>Sub</button>
    <br />
    <button onClick={changeColor}>changeColor</button>

  </div>);
}

export default Mycomponents;
