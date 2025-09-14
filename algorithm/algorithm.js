function miniMaxSum(arr) {
    let total = arr.reduce((a, b) => a + b, 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let evenNumbers = arr.filter(x => x % 2 === 0);
    let oddNumbers = arr.filter(x => x % 2 !== 0);

    console.log((total - max) + " " + (total - min));
    console.log("Total sum:", total);
    console.log("Min element:", min);
    console.log("Max element:", max);
    console.log("Even elements:", evenNumbers.join(", "));
    console.log("Odd elements:", oddNumbers.join(", "));
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
