// Challenge 1:
// Function takes an array of numbers as input and returns the minimum value in the array
// (i.e the smallest number)

function min(arr) {
    if (arr.length === 1) return arr[0]; // 1

    let min = arr[0]; // 1
    for (let i = 1; i <= arr.length; i++) { // 1
        if (arr[i] < min) min = arr[i]; // n
    }
    return min; // 1
}
// O(n) => Linear

console.log(min([99, 87, 55, 4, 22, 5]));


// Challenge 2:
// Function takes a number as input and return "true" for an even number and "false" if odd
function isEven(n) {
    return (n % 2 === 0); // 1
}
// O(1) => Constant Time

console.log(isEven(1));
console.log(isEven(2));
