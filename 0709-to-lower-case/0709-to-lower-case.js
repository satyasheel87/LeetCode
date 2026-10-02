/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let result = ""
    for (let i = 0; i < s.length; i++) {
        let ch = s.charCodeAt(i)
        if (ch >= 65 && ch <= 90) {
            result += String.fromCharCode(ch + 32)
        } else {
            result += s[i]
        }
    }
    return result
};