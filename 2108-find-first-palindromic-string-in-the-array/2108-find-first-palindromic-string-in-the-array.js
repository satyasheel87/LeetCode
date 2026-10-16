/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        let string = words[i]

        let j = 0, k = string.length - 1, isPalindrome = true
        
        while (j < k) {
            if (string[j] !== string[k]) {
                isPalindrome = false
                break
            }
            j++
            k--
        }

        if (isPalindrome) return string
    }
    return ""
};