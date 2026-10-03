/**
 * @param {string[]} sentences
 * @return {number}
 */
// array, string 
var mostWordsFound = function (sentences) {
    let maxWord = 0
    for (let i = 0; i < sentences.length; i++) {
        let currentSentence = sentences[i]
        let spaceCount = 0
        for (let j = 0; j < currentSentence.length; j++) {
            if (currentSentence[j] === " ") {
                spaceCount++
            }
        }
        let totalWord = spaceCount + 1
        if (totalWord > maxWord) {
            maxWord = totalWord
        }
    }
    return maxWord
};