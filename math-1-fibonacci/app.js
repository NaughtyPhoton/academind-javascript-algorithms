// Return the nth element of the Fibonacci sequence.
// e.g. fib(4) yields 5

// Algorithm needs to do two things:
// 1.) Calculate the sequence up to the element we're looking for
// 2.) Return that element

function fib(n) {
    const arr = [1, 1]; // 1
    for (let i = 2; i <= n; i ++) { // 1
        arr.push(arr[i - 1] + arr[i - 2]); // n - 1
    }
    return arr[n]; // 1
}

// T = 1 + 1 + 1 + n
// 3 + n
// => O(n) -- Linear

console.log(fib(14));


