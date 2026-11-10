/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let count = 0
    let expected = [...heights]
    let n = expected.length
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (expected[j] > expected[j + 1]) {
                let temp = expected[j]
                expected[j] = expected[j + 1]
                expected[j + 1] = temp
            }
        }
    }
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++
        }
    }
    return count
};