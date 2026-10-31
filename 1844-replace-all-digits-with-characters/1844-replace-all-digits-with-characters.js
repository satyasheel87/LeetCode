/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let ans = ''
    for (let i = 0; i < s.length; i++) {

        if (isNaN(s[i])) {
            ans += s[i]
        } else {
            let charCode = s.charCodeAt(i - 1)
            ans += String.fromCharCode(charCode + Number(s[i]))
        }
    }

    return ans
};