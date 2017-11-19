function AddRemoveElements(input) {
    let outputArray = [];

    for(let i = 0; i<input.length;i++){
        let currentCommand = input[i].split(' ');
        if(currentCommand[0]=="add"){
        outputArray.push(currentCommand[1]);
        }
        else if(currentCommand[0]=="remove"){
        outputArray.splice(currentCommand[1],1);
        }
    }

    for(let element in outputArray){
        console.log(outputArray[element])
    }
}

AddRemoveElements(
    'add 3',
    'add 5',
    'remove 1',
    'add 2'
);