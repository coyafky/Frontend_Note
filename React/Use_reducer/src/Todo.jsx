import { useReducer } from 'react';

// Reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoList() {
  // 使用 useReducer 钩子，传递 reducer 函数和初始状态（这里是一个空数组）
  const [todos, dispatch] = useReducer(reducer, []);

  const handleAddTodo = (text) => {
    dispatch({
      type: 'ADD_TODO',
      payload: text,
    });
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: id,
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            handleAddTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;