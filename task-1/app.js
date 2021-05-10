// Write an algorithm that takes an array of numbers as input
// and calculates the sum of those numbers

// Define the time complexity and determine the fastest way to do it.

function sumUp(nums) {
    let sum = 0;  // 1
    for (const num of nums) sum += num; // 1 + n
    return sum;  // 1
}
// T = 1 + 1 + 1 + n
// also written as 3 + n
// or... 1 * n
// Big O = O(n)
// Linear Time Complexity

console.log(sumUp([10, 20, 30, 40, 50]));


function sumUp2(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
// This is the same time complexity!

// There is no constant time algorithm for this problem.
// Linear time complexity is the best case scenario
