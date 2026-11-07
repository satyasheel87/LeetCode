/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === 1) {
            k--;

            if (k === 0) {
                return arr[i];
            }
        }
    }

    return "";
};


