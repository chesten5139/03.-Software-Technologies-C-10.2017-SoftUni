function storingObjects(input) {

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(" -> ");
        let object = {name: data[0], age: data[1], grade: data[2]};

        console.log(`Name: ${object.name}`);
        console.log(`Age: ${object.age}`);
        console.log(`Grade: ${object.grade}`);
    }
}