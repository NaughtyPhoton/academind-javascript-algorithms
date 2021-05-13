function findElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return i;
    }
}

const arr = [1, 6, 10, 2, -1, 100, 443, 3, 6, 87, 43];

console.log(findElement(arr, 3));


function findElementCallback(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) return i;
    }
}

const arr2 = [{name: 'nate'}, {name: 'sophie'}];

console.log(findElementCallback(arr2, (element) => element.name === 'sophie'));

