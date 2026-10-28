/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let elemSum = 0
    let digitSum = 0

    for (let i = 0; i < nums.length; i++) {
        elemSum += nums[i]

        let numStr = nums[i].toString()
        for (let j = 0; j < numStr.length; j++) {
            digitSum += Number(numStr[j])
        }
    }

    return elemSum - digitSum
};