import { useState } from 'react';

function CallbackEventHandle() {
  const [text, setText] = useState('');
  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} />

      {text}
    </div>
  );
}

function MyInput({ inputValue, onInputChange }) {
  return <input type="text" value={inputValue} onChange={onInputChange} />;
}

export default CallbackEventHandle;
