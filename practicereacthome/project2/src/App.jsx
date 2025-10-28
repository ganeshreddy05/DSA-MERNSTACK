import Practice from "./Practice.jsx"
import AgeIncrement from "./AgeIncrement.jsx"
import Propagation from "./Propogation.jsx"

// // // // import Props from "./props";

// // // // function App(){
// // // //   const [count,setCount] = useState("2");
// // // //    return(
// // // //     <div>
// // // //       <p>likes : {count}</p>
// // // //       <button onClick={()=> setCount(count+1)}>clickme</button>
// // // //     </div>
// // // //    );
// // // // }
// // // // export default App;
// // // function App(){
// // //   return(
// // //     <div>
// // //       <Buttons text="register"/>
// // //       <Buttons text="login"/>
// // //     </div>
// // //   );
// // // }
// // // export default App;
// // // // function App(){
// // // //   return(
// // // //     <div>
// // // //       <Props name="ganesh reddy" age={21}/>
// // // //       <Props age ="21" name="chintu"/>
// // // //     </div>
// // // //   );
// // // // }
// // // // export default App;

// // export default function Button(){
// //   function handleClick(){
// //     alert("you clickd me");
// //   }
// //   return(
// //     <button onClick={handleClick}>Click me</button>
// //   );
// // }
// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//     {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }

// 
function App(){
  return(
    <>
    <Practice/>
    <Propagation/>
    <Propagation/>
    <Propagation/>
    <AgeIncrement/>
    
    </>
    
  );
}
export default App;
