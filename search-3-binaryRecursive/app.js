
function binaryRecursive(arr, val, offset = 0) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (val === arr[middleIndex]) return middleIndex + offset;

    if (val < arr[middleIndex]) {
        endIndex = middleIndex;
    } else {
        offset += middleIndex + 1;
        startIndex = middleIndex + 1;
        endIndex++;
    }
    return binaryRecursive(arr.slice(startIndex, endIndex), val, offset);
}


const arr = [1, 2, 3, 6, 8, 9, 11, 12, 14, 99]

console.log(binaryRecursive(arr, 1));   // => 0
console.log(binaryRecursive(arr, 2));   // => 1
console.log(binaryRecursive(arr, 3));   // => 2
console.log(binaryRecursive(arr, 99));  // => 9
console.log(binaryRecursive(arr, 14));  // => 8
console.log(binaryRecursive(arr, 12));  // => 7


