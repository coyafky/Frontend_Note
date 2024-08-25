// src/index.js

import { Provider } from "react-redux";
import store from "./store";
import Counter2 from "./Counter2";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter2/>
      </Provider>
    </div>
  );
}

export default App;
