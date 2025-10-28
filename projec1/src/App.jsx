import React from "react";
import OpenRoles from "./Components/OpenRoles";
import FormApp from "./Components/Forms/UnControlledFormApp.jsx";
import ControlledFormApp from "./Components/Forms/ControlledFormApp.jsx";
function App(){
   
  // const dummyOpenRoles = ["fronend-enginerr","backend-developer","UI-UX Designer","product-manager","ceo","ctc"];

  return(
    <>
  <div className="bg-red-100 h-screen w-screen flex items-center justify-center">
    <ControlledFormApp/>
  {/* //   <OpenRoles OpenRolesData={dummyOpenRoles} /> */}
 </div>
{/* <FormApp/> */}
</>
  )
} 
export default App;