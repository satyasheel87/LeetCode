/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let ans = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            if (word[j] === x) {
                ans.push(i)
                break
            }
        }
    }
    return ans
};