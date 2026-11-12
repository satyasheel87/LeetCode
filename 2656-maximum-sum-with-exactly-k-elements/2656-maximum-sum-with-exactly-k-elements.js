/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let sum = 0
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }

    for (let i = 0; i < k; i++) {
        sum += max
        max++
    }

    return sum
};




