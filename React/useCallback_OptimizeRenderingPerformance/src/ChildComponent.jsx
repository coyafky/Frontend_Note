import React, { memo } from 'react';

function ChildComponent({ onIncrement, onToggleTheme }) {
  console.log('ChildComponent rendered');

  return (
    <div className="child-component">
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment from Child</button>
      <button onClick={onToggleTheme}>Toggle Theme from Child</button>
    </div>
  );
}

export default memo(ChildComponent);