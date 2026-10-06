/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let targetIndex = 0
    ruleKey === "type" ? (targetIndex = 0) : ruleKey === "color" ? (targetIndex = 1) : ruleKey === "name" ? (targetIndex = 2) : (targetIndex = -1)
    let count = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i][targetIndex] === ruleValue) {
            count++
        }
    }
    return count
};

