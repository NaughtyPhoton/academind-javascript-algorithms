
function cartProduct(setA, setB) {
    const result = [];

    for (let elA of setA) {
        if (!Array.isArray(elA)) elA = [elA];
        for (let elB of setB) {
            result.push([...elA, elB])
        }
    }
    return result;
}

function cartesian(...sets) {
    let tempProduct = sets.shift();

    for (let set of sets) {
        tempProduct = cartProduct(tempProduct, set);
    }

    return tempProduct;
}

const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l', 'xl'];
const styles = ['crew', 'v-neck']
const materials = ['cotton', 'hemp']
console.log(cartesian(colors, sizes, styles, materials));

