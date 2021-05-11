// Calculate the factorial of a number

// Algorithm needs to do one thing:
// (1) Go through all smaller numbers and multiply them with
//     each other (and with the input number)


function fact(number) {
    let result = number;
    for (let i = number - 1; i > 1; i--) {
        result *= i // n
    }
    return result;
}
// O(n)

console.log(fact(3)); // 3 * 2 * 1 = 6
console.log(fact(5)); // 5 * 4 * 3 * 2 * 1 = 120
