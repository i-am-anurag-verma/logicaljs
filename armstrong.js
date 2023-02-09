function armstrong(num){
    let temp = num;
    let sum = 0;

    while(temp > 0){
        let rem = temp % 10;
         sum = sum + rem * rem * rem;
        temp = parseInt(temp/10)
    }

    if(sum === num){
        console.log(`${num} is a armstrong number`)
    }else{
        console.log(`${num} is not a armstrong number`)

    }
}
armstrong(372)