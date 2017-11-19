function printLines(input) {
    for (let currentLine of input)
        if (currentLine == 'Stop') {
            break;
        }
        else {
            console.log(currentLine);
        }
}

/*
printLines(['Line 1', 'Line 2', 'Line 3', 'Stop'])*/
