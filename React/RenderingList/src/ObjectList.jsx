const list = [
  { id: 'a', firstname: 'Robin', lastname: 'Wieruch', year: 1988 },
  { id: 'b', firstname: 'Dave', lastname: 'Davidds', year: 1990 },
];

function ObjectList() {
             
  return (
    <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
  );
}

export default ObjectList;