/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxCandie = 0
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxCandie) {
            maxCandie = candies[i]
        }
    }
    for (let j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= maxCandie) {
            candies[j] = true
        } else {
            candies[j] = false
        }
    }
    return candies
};