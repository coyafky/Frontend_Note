function Usingkey() {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist',
  ];

  const ListItems = people.map((person) => <li>{person}</li>);
  return (
    <>
      <ul>{ListItems}</ul>
    </>
  );
}

export default Usingkey;
