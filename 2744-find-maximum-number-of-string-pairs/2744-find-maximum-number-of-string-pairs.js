/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let count = 0
    let set = new Set()
    
    for (let i = 0; i < words.length; i++) {
        let reverse = words[i].split('').reverse().join('')

        if (set.has(reverse)) {
            count++
            set.delete(reverse)
        } else (
            set.add(words[i])
        )
    }
    return count
};