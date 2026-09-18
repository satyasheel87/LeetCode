/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0
    let minP = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minP) {
            minP = prices[i]
        }
        let profit = prices[i] - minP
        maxP = Math.max(profit, maxP)
    }
    return maxP
};