let x = 3
let y = -7
let z = 2

if(x > 0 && y > 0 && z > 0){
    alert("The sign is +")
}
else if(x < 0 && y < 0 && z < 0){
    console.log("===>The sign is -")
}else if(x > 0 && y > 0 && z < 0){
    console.log("The sign +");
}else if(x < 0 && y > 0 && z < 0){
    console.log("The sign +")
}else{
    console.log("The sign is -")
}