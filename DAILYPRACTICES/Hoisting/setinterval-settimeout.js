// setTimeout(()=>{
//     console.log("after 3 seconds");
// },3000);

// setInterval(()=>{
//     console.log("repeat for every 2 seconds");
// },2000)


let number = 5;

function count(){
    console.log(number);
    number--;

    if(number>0){
        setTimeout(count,5000);
    
    }
    else{
        console.log("times is up")
    }
}
count();