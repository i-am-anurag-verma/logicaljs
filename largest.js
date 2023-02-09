let a = 5;
let b = -2;
let c = -6;
let d = 0;
let f = -1;

if(a>b && a>c && a>d && a>f){
    console.log("a===>",a)
}else if(b>a && b>c && b>d && b>f){
    console.log("b--->",b)
}else if(c>a && c>b && c>d && c>f){
    console.log("c====>",c)
}else if(d>a && d>b && d>c && d>f){
    console.log("d---",d)
}else{
    console.log("f--->",f)
}