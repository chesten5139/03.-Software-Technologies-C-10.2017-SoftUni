function largest3NUmbers(arr) {
    let nums = arr.map(Number);
    let numsSorted = nums.sort((a, b) => b - a);
    let count = Math.min(3, numsSorted.length);

    for (let i = 0; i < count; i++)
        console.log(numsSorted[i]);
}

largest3NUmbers([10, 30, 15, 20, 50, 5]);