/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let ans = []
    nums.sort((a, b) => a - b)

    let st = 0
    let end = nums.length - 1
    let firstIdx = -1

    while (st <= end) {
        let mid = Math.floor((st + end) / 2)
        if (nums[mid] === target) {
            firstIdx = mid
            end = mid - 1
        } else if (nums[mid] < target) {
            st = mid + 1
        } else {
            end = mid - 1
        }
    }

    if (firstIdx !== -1) {
        while (firstIdx < nums.length && nums[firstIdx] === target) {
            ans.push(firstIdx)
            firstIdx++
        }
    }

    return ans
};





