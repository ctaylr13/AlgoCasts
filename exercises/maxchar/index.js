// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let x of str) {
        if(chars[x]) {
            chars[x]++;
        } else {
            chars[x] = 1;
        }
    }
    // console.log("CHARS Object", chars);

    const entries = Object.entries(chars);
    // console.log("entries", entries);

    for (let x in chars) {
        if (chars[x] > max) {
            maxChar = x;
            max = chars[x]; 
        }
    }

    return maxChar;

    // return str;
}

console.log(maxChar("test"));
module.exports = maxChar;
