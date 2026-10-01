/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let totalSum = 0
    let leftSum = 0
    let rightSum = 0
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    for (let j = 0; j < nums.length; j++) {
        rightSum = totalSum - leftSum - nums[j]
        if (leftSum === rightSum) {
            return j
        }
        leftSum += nums[j]
    }
    return -1
};
