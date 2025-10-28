import { useState } from "react";
function FormApp(){
    const [name,setName]=useState("");
    function handleNameChange(event){
        let nameInput=event.target.value;
        setName((previousName)=>{
            previousName=nameInput
            return previousName;
        })
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
            const data={
                name : name
            }
            console.log(data)
    }
    return(
        <form onSubmit={(event)=>handleFormSubmit(event)}>
            <input className="bg-white placeholder-gray-400 border m-3"onChange={(event)=>handleNameChange(event)}
            type="text"
            placeholder="enter name"
            required
            />
            <button className="bg-red-600 text-white p-2 
            " type="submit">Register</button>
        </form>
    )

}
export default FormApp;