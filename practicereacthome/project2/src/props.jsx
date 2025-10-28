function Props({name,age}){//instead of writing props we are passing parameters
    return(
        <div>
            <p>{name}</p>
            <p>age : {age}</p>
        </div>
    );
}
export default Props;

function Card(props) {   //using props instead of passing parameters
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
