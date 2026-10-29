/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let count = 0;

    let rods = Array.from({ length: 10 }, () => new Set());

    for (let i = 0; i < rings.length; i += 2) {
        let color = rings[i];
        let rod = Number(rings[i + 1]);

        rods[rod].add(color);
    }

    for (let i = 0; i < rods.length; i++) {
        if (rods[i].has("R") && rods[i].has("G") && rods[i].has("B")) {
            count++;
        }
    }

    return count;
};

