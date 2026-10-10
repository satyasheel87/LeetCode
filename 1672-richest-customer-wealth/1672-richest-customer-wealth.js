/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let richest = 0
    let wealth = []
    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i]
        let totalWealth = 0
        for (let j = 0; j < account.length; j++) {
            totalWealth += account[j]
            wealth[i] = totalWealth
        }
        if (wealth[i] > richest) {
            richest = wealth[i]
        }
    }
    return richest
};
