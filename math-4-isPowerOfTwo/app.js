// Determine whether an input number is a power of two.
// isPowerOfTwo(8);  // => true
// isPowerOfTwo(5);  // => false

// Algorithm needs to do one thing:
// 1.) Divide number and future division results by two,
//     until 1 is reached and check if the remainder is always 0

function isPowerOfTwo(number) {
    if (number < 1) return false;

    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) return false;
        dividedNumber = dividedNumber / 2;
    }
    return true;
}

// Worst Case => large number that can be divided by two many times
// Worst Case => O(log2 n)

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));


// (Unsigned) Powers of two, in binary form, always have just one bit:
// 1: 1
// 2: 10
// 4: 100
// (The bitwise & operator compares binary numbers together)
function isPowerOfTwoImproved(number) {
    return (number & (number - 1)) === 0; // O(1)
}

console.log(isPowerOfTwoImproved(8));
console.log(isPowerOfTwoImproved(5));
console.log(isPowerOfTwoImproved(16));
console.log(isPowerOfTwoImproved(13));
