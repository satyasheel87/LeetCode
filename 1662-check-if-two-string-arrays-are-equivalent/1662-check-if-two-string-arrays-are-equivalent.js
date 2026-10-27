/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let ans1 = ""
    let ans2 = ""
    for (let i = 0; i < word1.length; i++) {
        ans1 += word1[i]
    }
    for (let j = 0; j < word2.length; j++) {
        ans2 += word2[j]
    }

    return ans1 === ans2
};