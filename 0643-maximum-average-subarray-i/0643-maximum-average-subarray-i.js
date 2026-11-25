/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let subArraySum = 0
    for (let i = 0; i < k; i++) {
        subArraySum += nums[i]
    }
    let maxSum = subArraySum
    for (let i = k; i < nums.length; i++) {
        subArraySum = subArraySum + nums[i] - nums[i - k]
        maxSum = Math.max(maxSum, subArraySum)
    }
    return maxSum / k
};