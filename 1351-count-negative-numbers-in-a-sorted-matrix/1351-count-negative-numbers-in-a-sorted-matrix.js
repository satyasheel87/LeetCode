/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];

        for (let j = 0; j < row.length; j++) {
            if (row[j] < 0) {
                count++;
            }
        }
    }
    
    return count;
};