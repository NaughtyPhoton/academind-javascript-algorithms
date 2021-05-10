// Determine whether an input number is a prime number.
// -  isPrime(9); // false
// -  isPrime(5); // true

// A prime number is one that is only divisible by itself and by 1.
// 5 can only be divided by itself and by 1 and not any other number.

// Algorithm needs to do one thing:
// 1.) Try dividing the number by all smaller numbers
//     and return true if it's only divisible by itself and by 1.

function isPrime(n) {
    for (let i = 2; i < n; i++) { // 1
        if (Number.isInteger(n / i)) { // n
            return false // 1
        }
    }
    return true; // 1
}

// Best Case: n === 1 or 2   => O(1) Constant Time
// Average Case: n === ? (probably not a prime number) => O(n) Linear Time
// Worst Case: n === big number & is a prime number    => O(n) Linear Time



// Every number that is NOT a prime number has a product
// that consists of two factors a & b
// that are both neither 1 nor the number itself
// ex: 9 = 3 * 3
function isPrimeImproved(n) {
    for (let i = 2; i < Math.sqrt(n); i++) { // 1
        if (Number.isInteger(n / i)) { // n
            return false // 1
        }
    }
    return true; // 1
}
// Average/Worst Case: => O(sqrt(n))

console.log(isPrimeImproved(8));
console.log(isPrimeImproved(27_277));



