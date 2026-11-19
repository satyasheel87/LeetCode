/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    let kelvin = 0
    let fahrenheit = 0

    kelvin = celsius + 273.15
    fahrenheit = (celsius * 9 / 5) + 32
    
    return [kelvin, fahrenheit]
};