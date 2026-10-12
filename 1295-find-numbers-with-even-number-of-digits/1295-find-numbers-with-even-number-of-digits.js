/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let digitCount = 0

        while (num > 0) {
            num = Math.floor(num / 10)
            digitCount++
        }
        if (digitCount % 2 === 0) {
            count++
        }
    }
    return count
};


