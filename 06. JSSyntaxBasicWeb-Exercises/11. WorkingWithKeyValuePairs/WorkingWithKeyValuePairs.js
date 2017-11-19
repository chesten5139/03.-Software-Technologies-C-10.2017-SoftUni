function workingWithKeyValuePairs(input) {
    let pairs = [];

    for (let i = 0; i < input.length - 1; i++) {
        let data = input[i].split(' ');
        let key = data[0];
        let value = data[1];
        pairs[key] = value;

    }
    let key = input[input.length - 1];
    console.log(pairs[key] || "None");
}