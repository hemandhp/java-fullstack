import { useState, useMemo } from "react";


function MemoExample() {
    const [count, setCount] = useState(0);
    const ComplexCal=useMemo(() => {
        console.log("Complex Calculation");
        return count*10;
    }, [count]);

    return(
        <div>
            <h2>Memo Example</h2>
            <p>Count: {count}</p>
            <p>Complex Calculation: {ComplexCal}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )

}
export default MemoExample;