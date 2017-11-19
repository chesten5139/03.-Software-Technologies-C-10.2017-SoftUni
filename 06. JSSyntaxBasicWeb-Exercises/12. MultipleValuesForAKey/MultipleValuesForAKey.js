function valuesForKey(input) {

    let key = input[input.length - 1];
    let keyValues = [];

    for (let i = 0; i < input.length - 1; i++)
    {
        let data = input[i].split(' ');

        if(key === data[0]){
            keyValues.push(data[1]);
        }
    }

    if(keyValues.length > 0)
        console.log(keyValues.join("\n"));

    else
        console.log("None");
}
