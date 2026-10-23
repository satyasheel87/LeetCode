/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let ansMap = new Map();

    for (let i = 0; i < names.length; i++) {
        ansMap.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);

    for (let j = 0; j < names.length; j++) {
        names[j] = ansMap.get(heights[j]);
    }

    return names;
};