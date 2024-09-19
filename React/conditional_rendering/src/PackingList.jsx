import { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'T-Shirt', packed: false },
    { id: 2, name: 'Jeans', packed: true },
    { id: 3, name: 'Socks', packed: false },
  ]);

  const handlePackItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <h1>Packing List</h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onPack={handlePackItem} />
        ))}
      </ul>
    </div>
  );
}
const Item = ({ item, onPack }) => {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.name}
      </span>
      <button onClick={() => onPack(item.id)}>
        {item.packed ? 'Unpack' : 'Pack'}
      </button>
    </li>
  );
};

export default PackingList;


// 状态管理：
// PackingList 组件使用 useState 管理一个 items 数组，其中每个 item 都有一个 id、name 和 packed 状态。
// 有条件地返回 JSX：
// 在 Item 组件中，我们根据 item.packed 状态有条件地返回不同的 JSX。
// 如果 item.packed 为 true，我们使用 textDecoration: 'line-through' 来表示该物品已打包。
// 如果 item.packed 为 false，我们使用 textDecoration: 'none' 来表示该物品未打包。
// 事件处理：
// handlePackItem 函数用于切换 item 的 packed 状态。
// 当用户点击按钮时，onPack 事件处理程序会调用 handlePackItem 函数，并传递 item.id 作为参数。
