// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var tempArray = str.split(" ");
    var finalArray = [];
    for (let x of tempArray) {
        finalArray.push(x.charAt(0).toUpperCase() + x.slice(1));
    }
    var finalString = finalArray.join(" ");
    return finalString;

}
var str = "one! space";
console.log(capitalize(str));
module.exports = capitalize;
