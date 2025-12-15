

function Counter({ state, dispatch }) {
    return (
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={() => dispatch({ type: "Increase" })}>+</button>
            <button onClick={() => dispatch({ type: "Decrease" })}>-</button>
        </div>
    );
}
export default Counter;