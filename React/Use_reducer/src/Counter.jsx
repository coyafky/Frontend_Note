import { useReducer } from 'react';

// Reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBSTRACT':
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  // 使用 useReducer 钩子，传递 reducer 函数和初始状态（这里是 0）
  const [state, dispatch] = useReducer(reducer, 0);

  const handleAdd = () => {
    dispatch({
      type: 'ADD',
    });
  };

  const handleSubstract = () => {
    dispatch({
      type: 'SUBSTRACT',
    });
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <span>{state}</span>
      <button onClick={handleSubstract}>Sub</button>
    </div>
  );
}

export default Counter;

// useReducer 钩子：useReducer 需要两个参数：
// Reducer 函数：reducer，它定义了如何根据不同的 action 更新状态。
// 初始状态：0，这是状态的初始值。
// dispatch 函数：dispatch 用于发送 action 到 reducer 函数，从而更新状态。
// handleAdd 和 handleSubstract 函数：这两个函数分别调用 dispatch 并传递相应的 action 类型（'ADD' 或 'SUBSTRACT'）。
// state：这是当前的状态值，它会在每次状态更新时重新渲染。