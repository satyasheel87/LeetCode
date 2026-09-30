/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let map = new Map()
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        if (map.has(current)) {
            count += map.get(current)
        }
        map.set(current, (map.get(current) || 0) + 1)
    }
    return count
};