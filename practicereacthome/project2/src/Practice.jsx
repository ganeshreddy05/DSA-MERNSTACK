import { useState } from "react";
function Counter(){
  const[count,setCount]= useState(0);
  function handleclick(){
    setCount(count+1);

  }
  return(
    
      <button onClick={handleclick}>
        YOU PRESSED ME {count}TIMES
      </button>
    
  );
}
export default Counter;