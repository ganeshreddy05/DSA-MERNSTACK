import { useState } from "react";
function ControlledFormApp(){
    let displayNameFromLoginwithGoogle="ganesh reddy"
    let displayEmailFromLoginwithGoogle="ganeshreddyg99@.com"
    
    const [name,setName]=useState(displayNameFromLoginwithGoogle);
    const [mail,setEmail]=useState(displayEmailFromLoginwithGoogle);
    const [age,setAge]=useState(0)
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
            const data={
                name : name,
                mail : mail,
                age : age
            }
            console.log(data)
            
    }
    return(
        <form className="p-6 bg-green-300 rounded-2x1 boreder-2 bordered-green-600 flex flex-col gap-3 items-center rounded-xl"
        onSubmit={(event)=>handleFormSubmit(event)}>
            <input className="bg-white placeholder-gray-400 "
            onChange={(event)=>setName(event.target.value)}
            type="text"
            value={name}
            placeholder="enter name"
            required
            />
            <input className="bg-white placeholder-gray-400"
            onChange={(event)=>setEmail(event.target.value)}
            type="email"
            value={mail}
            placeholder="enter email"
            required
            />
             <input className="bg-white placeholder-gray-400"
            onChange={(event)=>setAge(event.target.value)}
            type="number"
            value={age}
            placeholder="enter age"
            required
            />
            <button className="bg-red-600 text-white p-2"
             type="submit">Register</button>
        </form>
    )

}
export default ControlledFormApp;