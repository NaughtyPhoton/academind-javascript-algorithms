
function sort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                const tempI = result[i];
                result[i] = result[j];
                result[j] = tempI;
            }
        }
    }
    return result;
}

const sorted = sort([5, 1, 76, 3, -1, 2, 400, 4]);
console.log(sorted);
