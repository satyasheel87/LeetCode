/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let st = 0
    let end = nums.length - 1
    while (st <= end) {
        let mid = Math.floor((st + end) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            st = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
};