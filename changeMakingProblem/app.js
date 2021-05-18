/**
 * Get the least amount of coins to arrive at target value
 */
function getCoinsGreedy(availableCoins, target) {
    let count = 0;
    let largestCoinIndex = 0;
    while (target > 0) {
        for (let i = largestCoinIndex; i < availableCoins.length; i++) {
            if (availableCoins[i] <= target) {
                target -= availableCoins[i];
                largestCoinIndex = i;
                count++;
                break;
            }
        }
    }
    return count;
}

const availableCoins = [8, 6, 5, 1];  // => 5
const target = 11;

console.log(getCoinsGreedy(availableCoins, target));


function getCoinsDynamic() {

}
