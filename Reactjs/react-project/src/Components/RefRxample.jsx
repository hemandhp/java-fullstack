import { useRef } from "react";


function RefExample() {
const inputRef =useRef();

function handleFocus() {
    inputRef.current.focus();
}

return(
    <div>
        <input  ref={inputRef} placeholder="Type here!" />
        <button onClick={handleFocus}>Focus Input</button>
    </div>
)

}
export default RefExample;