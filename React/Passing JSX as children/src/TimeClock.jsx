import React, { useState, useEffect } from 'react';

function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}

function TimeClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState('black');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <Clock color={color} time={time} />
    </div>
  );
}

export default TimeClock;
