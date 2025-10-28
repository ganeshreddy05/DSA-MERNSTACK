import { useState } from "react"
 function Counter(){
    const [age,setAge]=useState(42);

    function handleClick(){
        setAge(a=>a+5);

    }
    return(
        <>
        <h1>your age = {age}</h1>
        <h1>ganesh reddy</h1>
        <button onClick={handleClick}>+3</button>
        </>
    )
}
export default Counter;