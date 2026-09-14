/**
 * @param {number[]} nums
 * @return {number}
 */
//  [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function (nums) {
    let j = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return j
};