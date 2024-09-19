function BasicEvent() {
  function handleClick() {
    alert('你按下了这个按钮');
  }

  return (
    <div>
      <button onClick={handleClick}>Event handler</button>
    </div>
  );
}

export default BasicEvent;
