import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/CounterSlice";

function Counter(){
    const dispathch= useDispatch();
    const counter= useSelector((state)=> state.counter.value);

    return(
        <div>
            <h1>Counter Value: {counter} </h1>
            <button onClick={()=> dispathch({type:"counter/increment"})}>Increment</button>
            <button onClick={()=> dispathch({type:"counter/decrement"})}>Decrement</button>
            <button onClick={()=> dispathch({type:"counter/reset"})}>Reset</button>
        </div>
    )
}
export default Counter;