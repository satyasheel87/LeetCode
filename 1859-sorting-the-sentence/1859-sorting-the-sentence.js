/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let arr = s.split(" ")

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let num1 = Number(arr[j].slice(-1))
            let num2 = Number(arr[j + 1].slice(-1))

            if (num1 > num2) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    
    return arr.map((word) => word.slice(0, -1)).join(" ");
};