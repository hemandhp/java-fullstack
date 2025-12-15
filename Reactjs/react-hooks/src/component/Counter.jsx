// import { useState } from "react";
// import ButtonGroup from "./ButtonGroup";


// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h2>Count:{count}</h2>
//             <ButtonGroup count={count} setCount={setCount}/>
//         </div>
//     )
// }
// export default Counter;


import {useEffect, useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Count value changed:", count);
    }, [count]);


return(
    <div>
        <h2>Count:{count}</h2>
        
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        
    </div>
)}
export default Counter