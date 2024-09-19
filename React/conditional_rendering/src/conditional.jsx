import React, { useState } from 'react';
import Test from './components/Test';

function Condistional() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled ? <Test /> : <p>The value is false</p>}
    </div>
  );
}

export default Condistional;
