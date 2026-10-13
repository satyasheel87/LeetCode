/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let p = s.split(" ")
    let ans = ""
    for (let i = 0; i < k; i++) {
        if (i > 0) {
            ans += " "
        }
        ans += p[i]
    }
    return ans
};

