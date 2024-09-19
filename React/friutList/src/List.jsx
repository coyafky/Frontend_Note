function List() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'banana', calories: 45 },
    { id: 3, name: 'pear', calories: 105 },
    { id: 4, name: 'peach', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];
  //fruits.sort((a,b)=>a.name.localeCompare(b.name)); // 按照字母排序
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); 按照字母排序的逆序排序
  //  按照卡路里来排序
  //逆序排序
  // fruits.sort((a,b)=>b.calories-a.calories);
  // 筛选calories小于100的水果

  //const lowcCalFruits = fruits.filter(fruit=>fruit.calories<100);

  const highCalFruits = fruits.filter(fruit=>fruit.calories>100)

  const listItem = highCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));
  return <ol>{listItem}</ol>;
}

export default List;
