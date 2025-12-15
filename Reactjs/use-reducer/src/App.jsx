import { useReducer } from "react";
import  counterReducer, {initialState } from "./components/reducer/counterReducer";
import Counter from "./components/Counter";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>useReducer Example</h1>
      <Counter state={state} dispatch={dispatch} />
    </div>
  );


}
export default App;