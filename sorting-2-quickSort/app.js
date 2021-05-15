

function sort(arr) {
    const copiedArray = [...arr];

    if (copiedArray.length <= 1) return copiedArray;

    const smallerElementsArray = [];
    const biggerElementsArray = [];
    const pivotElement = copiedArray.shift();
    const centerElementsArray = [pivotElement];

    while (copiedArray.length) {
        const currentElement = copiedArray.shift();
        if (currentElement === pivotElement) {
            centerElementsArray.push(currentElement);
        } else if (currentElement > pivotElement) {
            biggerElementsArray.push(currentElement);
        } else smallerElementsArray.push(currentElement);
    }

    const smallerElementsSortedArray = sort(smallerElementsArray);
    const biggerElementsSortedArray = sort(biggerElementsArray);
    return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray);
}

const arr = [10, 2, 0, 4, 12, 2, 1, 9, -7, 2, 0, 100, 0];

console.log(sort(arr));


