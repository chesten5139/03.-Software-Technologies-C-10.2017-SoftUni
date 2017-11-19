function printReversedOrder(input) {
    let nums = input.map(Number);
    let numsReversed = [];

    for (let i = 0; i < nums.length; i++){
        numsReversed[i] = nums[nums.length - i - 1]
    console.log(numsReversed[i])}
}

/*
printReversedOrder(['5', '5.5', '24', '-3']);*/
