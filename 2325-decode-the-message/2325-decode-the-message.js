/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let mapping = {};
    let counter = 0;
    let ans = "";

    for (let i = 0; i < key.length; i++) {
        if (key[i] !== " " && !mapping[key[i]]) {
            mapping[key[i]] = String.fromCharCode(97 + counter);
            counter++;
        }
    }

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            ans += " ";
        } else {
            ans += mapping[message[i]];
        }
    }

    return ans;
};