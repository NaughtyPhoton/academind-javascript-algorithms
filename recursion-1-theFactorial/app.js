// Calculate the factorial of a number

// Algorithm needs to do one thing:
// (1) Go through all smaller numbers and multiply them with
//     each other (and with the input number)

function fact(number) {
    if (number === 1) {
        return 1;
    }
    return number * fact(--number);
}
// O(n) => Linear
// In every function call, we have O(1)
// Same time complexity as loop

console.log(fact(3)); // 3 * 2 * 1 = 6
console.log(fact(5)); // 5 * 4 * 3 * 2 * 1 = 120

