import React from "react";
import Jobcard from "./Jobcard";
function OpenRoles(props){
console.log(props)

console.log(props.OpenRolesData)
return(
    <div className="w-[350px] h-[400px] bg-white">
        <div className="flex justify-between p-3">
            <h2>Open Roles</h2>
            <p>{"->"}</p>
        </div>
        <div>
            {
                props.OpenRolesData.map((ele)=>(<Jobcard jobTitle={ele} />
                ))
                 }

        </div>

    </div>
)

}
export default OpenRoles;