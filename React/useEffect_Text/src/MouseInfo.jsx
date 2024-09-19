import { useEffect, useState } from 'react';

function MouseInfo() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      console.log({ x: event.ClientX, y: event.clientY });
      setPosition({ x: event.ClientX, y: event.clientY });
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);
  return (
    <>
      <p>鼠标的位置：{JSON.stringify(position)}</p>
    </>
  );
}
export default MouseInfo;
