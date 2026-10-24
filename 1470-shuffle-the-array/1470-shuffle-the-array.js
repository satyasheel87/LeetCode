/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let result = new Array(nums.length);
    let j = 0;

    for (let i = 0; i < n; i++) {
        result[j] = nums[i]
        j++
        result[j] = nums[i + n]
        j++
    }

    return result
};
