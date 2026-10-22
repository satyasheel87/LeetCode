/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let digits = num
        .toString()
        .split("")
        .sort((a, b) => a - b);

    let num1 = Number(digits[0]) * 10 + Number(digits[3]);
    let num2 = Number(digits[1]) * 10 + Number(digits[2]);

    let ans = Number(num1 + num2);
    return ans;
};

