// Return the nth element of the Fibonacci sequence.
// e.g. fib(4) yields 5

// Algorithm needs to do two things:
// 1.) Calculate the sequence up to the element we're looking for
// 2.) Return that element

let count = 0;

// DON'T DO THIS
function slowRecursiveFib(n) {
    count++;
    if (n === 0 || n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

// O(2^n)




// Dynamic Programming -- uses Memoization
function fibMemoized(n, mem = {}) {
    let result;
    if (mem[n]) return mem[n]
    count++;

    if (n === 0 || n === 1) {
        result = 1;
    } else {
        result = fibMemoized(n - 1, mem) + fibMemoized(n - 2, mem);
    }
    mem[n] = result;
    return result;
}

function loopFib(n) {
    const arr = [1, 1]; // 1
    for (let i = 2; i <= n; i ++) { // 1
        count++;
        arr.push(arr[i - 1] + arr[i - 2]); // n - 1
    }
    return arr[n]; // 1
}

console.time('loopFib')
console.log(loopFib(300));
console.timeEnd('loopFib')      // => 5.783ms
console.log('counter:', count)  // => 44

count = 0;

console.time('fib')
console.log(slowRecursiveFib(45));
console.timeEnd('fib')          // => 30336.500ms
console.log('counter:', count)  // => 3672623805

count = 0;

console.time('memoized')
console.log(fibMemoized(300));
console.timeEnd('memoized')     // => 0.097ms
console.log('counter:', count)  // => 89



