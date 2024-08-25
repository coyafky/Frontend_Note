// src/Counter.js
import React from 'react';
import { connect } from 'react-redux';

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// 将Redux state映射到React props
const mapStateToProps = state => ({
  count: state
});

// 将Redux actions映射到React props
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

// 使用connect函数连接React组件和Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);