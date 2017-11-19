function multiplyDivideNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let output = 0;
    if (num2>=num1)
    output = num1 * num2;
    else
        output = num1/num2;

    console.log(output);
}

/*
multiplyDivideNumber([2, 3])*/
