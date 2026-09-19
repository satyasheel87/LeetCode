/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let myMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i]
        if (myMap.has(currentNumber)) {
            let postIndex = myMap.get(currentNumber)
            if (i - postIndex <= k) {
                return true
            }
        }
        myMap.set(currentNumber, i)
    }
    return false
};