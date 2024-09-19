function EasyList() {
  return (
    <ul>
      {['a', 'b', 'c'].map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default EasyList;
