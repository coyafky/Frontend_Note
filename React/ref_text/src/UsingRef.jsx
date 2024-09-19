import { useRef,useState } from 'react';

function Counter() {
  const handleClickedButton = useRef(false);
  const [count, setCount] = useState(0);

  function onClick() {
    const newCount = count + 1;
    setCount(newCount);
    handleClickedButton.current = true;
  }
  console.log('Has clicked button? ' + handleClickedButton.current);
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
