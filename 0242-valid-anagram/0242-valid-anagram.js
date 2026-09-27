/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let countDiary = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (countDiary[char]) {
            countDiary[char]++
        } else {
            countDiary[char] = 1
        }
    }

    for (let j = 0; j < t.length; j++) {
        let char = t[j]
        if (!countDiary[char]) {
            return false
        } else {
            countDiary[char]--
        }
    }
    return true
};