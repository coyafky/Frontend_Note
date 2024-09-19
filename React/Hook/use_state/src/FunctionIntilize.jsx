import { useState } from 'react';

function FunctionIntilize() {
  const [date, setDate] = useState(() => {
    const dt = new Date();
    return {
      year: dt.getFullYear(),
      month: dt.getMonth() + 1,
      day: dt.getDate(),
    };
  });
  return (
    <>
      <h1>今天的日期</h1>
      <p>年份 {date.year}</p>
      <p>月份{date.month}</p>
      <p>日期{date.day}</p>
    </>
  );
}

export default FunctionIntilize;
