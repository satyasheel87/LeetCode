/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let mySet = new Set(nums)
    let missing = []
    for (let i = 1; i <= nums.length; i++) {
        if (!mySet.has(i)) {
            missing.push(i)
        }
    }
    return missing
};
