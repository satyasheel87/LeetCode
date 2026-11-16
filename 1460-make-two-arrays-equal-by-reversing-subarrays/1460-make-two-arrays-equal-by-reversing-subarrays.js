/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    let map = new Map()
    for (let i = 0; i < target.length; i++) {
    map.set(target[i], (map.get(target[i]) || 0) + 1);
    }
    let isEqual = true
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i]) || map.get(arr[i]) === 0) {
            isEqual = false;
        } else {
            map.set(arr[i], map.get(arr[i]) - 1);
        }
    }
    return isEqual
};