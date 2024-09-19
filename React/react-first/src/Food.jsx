function Food() {
  const food1 = 'apple';
  const food2 = 'bannana';
  const food3 = 'pear';

  return (
    <ul>
      <li>{food1}</li>

      <li>{food2}</li>

      <li>{food3.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
