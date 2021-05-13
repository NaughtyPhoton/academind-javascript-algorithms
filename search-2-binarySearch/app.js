function binarySearch(arr, val) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((endIndex + startIndex) / 2);

        if (arr[middleIndex] === val) return middleIndex;

        if (val === arr[middleIndex]) {
            return middleIndex
        } else if (arr[middleIndex] > val) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
}

const arr = [1, 5, 8, 9, 13, 99, 100, 101, 105, 106, 100_000, 100_012];

console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 8));
console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 13));
console.log(binarySearch(arr, 99));
console.log(binarySearch(arr, 100));
console.log(binarySearch(arr, 101));
console.log(binarySearch(arr, 105));
console.log(binarySearch(arr, 106));
console.log(binarySearch(arr, 100_000));
console.log(binarySearch(arr, 100_012));


function binarySearchObjects(arr, val, key) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((endIndex + startIndex) / 2);

        if (arr[middleIndex][key] === val) return middleIndex;

        if (val === arr[middleIndex][key]) {
            return middleIndex
        } else if (arr[middleIndex][key] > val) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
}

const users = [
    {age: 5},
    {age: 10},
    {age: 12},
    {age: 13},
    {age: 20},
    {age: 21},
    {age: 29},
];

console.log(binarySearchObjects(users, 13, 'age'));
