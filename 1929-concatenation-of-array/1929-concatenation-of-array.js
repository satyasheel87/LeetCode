/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let n = nums.length
    let newArray = new Array(nums.length * 2)
    for (let i = 0; i < nums.length; i++) {
        newArray[i] = nums[i]
        newArray[i + n] = nums[i]
    }
    return newArray
};
