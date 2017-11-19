function productOfThreeNumbers(input) {
    let counter = 0;
    for(let i=0; i<input.length; i++)
        if(Number(input[i])==0){
            console.log("Positive");
            break;}
        else if( Number(input[i])<0){
            counter ++;}
    if(counter % 2 == 0)
        console.log("Positive");
    else{
            console.log("Negative");
    }
}

/*
productOfThreeNumbers([2, 3, -1]);*/
