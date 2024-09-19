import React from 'react';
function InlineHander() {
  return (
    <>
      <button
        onClick={() => {
          alert('你按下了这个按钮');
        }}
      >
        InlineHander
      </button>
    </>
  );
}

export default InlineHander;
