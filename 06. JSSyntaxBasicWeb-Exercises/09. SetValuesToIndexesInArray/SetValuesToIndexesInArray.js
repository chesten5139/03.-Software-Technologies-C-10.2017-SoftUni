function setValuesToArray(input) {
    let length = Number(input[0]);
    let outputArray = [];

    for (i = 0; i < length; i++) {
        outputArray.push(0);
    }

    for (i = 1; i < input.length; i++) {
        let splitArray = input[i].split(' ');
        let currentIndex = Number(splitArray[0]);
        if (currentIndex in outputArray)
            outputArray[currentIndex] = Number(splitArray[2]);
    }

    for (let element in outputArray) {
        console.log(outputArray[element])
    }
}

/*setValuesToArray([
    '3',
    '0 - 5',
    '1 - 6',
    '2 - 7']);*/
