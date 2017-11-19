function JSONToString(input) {

    let object = {};

    for(let i = 0; i < input.length; i++) {
        let data = input[i].split(" -> ");
        let key = data[0];
        let value = data[1];

        if(!isNaN(value)){
            value = Number(value);
        }
        object[key] = value;
    }
    console.log(JSON.stringify(object));
}