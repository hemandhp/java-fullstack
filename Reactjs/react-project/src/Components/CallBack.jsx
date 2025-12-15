import {useCallback, useState } from "react";



function CallBack() {
    const [count, setCount] = useState(0);

    const  handleClick=useCallback(()=>{
        console.log("Button clicked");
    },[]);

    return(
        <div>
            <h2>CallBack Example</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <Child onPress={handleClick}/>
        </div>
    )

}

function Child({onPress}) {
    console.log("Child component rendered");
    return(
        <div>
        <button onClick={onPress}>Click child button</button>       
         </div>
    )
}
export default CallBack;