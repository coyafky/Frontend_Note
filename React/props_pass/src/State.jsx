import React, { useState } from 'react';

function State() {
  const [isShow, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleToggle} type="button">
        Toggle
      </button>
      {isShow ? <Welcome text="Welcome to React" /> : null}
    </div>
  );
}

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default State;
