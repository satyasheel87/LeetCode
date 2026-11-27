/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let ans = []

    for (let i = 0; i < code.length; i++) {
        let sum = 0
        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                let nextIndex = (i + j) % code.length
                sum += code[nextIndex]
            }
            ans[i] = sum
        }
        if (k < 0) {
            for (let j = 1; j <= -k; j++) {
                let prevIndex = (i - j + code.length) % code.length
                sum += code[prevIndex]
            }
            ans[i] = sum
        }
        if (k === 0) {
            return new Array(code.length).fill(0)
        }
    }

    return ans
};