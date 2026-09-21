/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let chardiary = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (chardiary[char]) {
            chardiary[char]++
        } else {
            chardiary[char] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (chardiary[char] === 1) {
            return i
        }
    }
    return -1
};