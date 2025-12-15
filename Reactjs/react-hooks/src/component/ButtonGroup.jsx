
function ButtonGroup({ count, setCount }) {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default ButtonGroup;