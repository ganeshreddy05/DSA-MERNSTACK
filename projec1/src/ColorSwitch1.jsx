import React, { useState } from "react";
function ColorSwitch1()
{
     const[colorw,setColor]=useState("white");

    function OnChangeColor(){
        setColor("red");

    }
    return(
       <>
       <button onClick={OnChangeColor}  style={{background : `${colorw}`}}>change color</button> 
       </>
    );
}    
export default ColorSwitch1;
