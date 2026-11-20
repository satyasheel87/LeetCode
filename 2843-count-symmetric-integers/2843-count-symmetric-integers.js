/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0

    while (low <= high) {
        let str = low.toString()

        if (str.length % 2 === 0) {
            let mid = Math.floor(str.length / 2)

            let firstHalf = str.slice(0, mid)
            let secondHalf = str.slice(mid)

            let firstSum = 0
            let secondSum = 0

            for (let i = 0; i < firstHalf.length; i++) {
                firstSum += Number(firstHalf[i])
            }

            for (let i = 0; i < secondHalf.length; i++) {
                secondSum += Number(secondHalf[i])
            }

            if (firstSum === secondSum) {
                count++
            }
        }
        low++
    }
    return count
};