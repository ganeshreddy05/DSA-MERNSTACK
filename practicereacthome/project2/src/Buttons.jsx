function Buttons({register,login}){ //one way 
    return(
        <>
        <button>{register}</button>
        <button>{login}</button>
        </>
    );

}


function Buttons1(props){ 
    return(
 <button>{props.text}</button>
);
}
export default Buttons;