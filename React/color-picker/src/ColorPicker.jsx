import React, { useState } from 'react';
function ColorPicker() {
  const [color, setColor] = useState('#FFFFFF');
  function handleColotChange() {
    setColor(event.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color picker</h1>
      <div className="color-picker" style={{ backgroundColor: color }}></div>

      <div>
        <p>Select color :{color}</p>
        <label>
          <input type="color" value={color} onChange={handleColotChange} />
        </label>
      </div>
    </div>
  );
}

export default ColorPicker;
