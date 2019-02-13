// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse2(str) {
//     var results = str.split("").reverse().join("");
//     return results; 
// }

function reverse(str) {
    var strArr = str.split("");
    var results = [];
    var i; 
    var arrLength = strArr.length;
    for(i = 0; i < strArr.length; i++){
        results[i] = strArr[arrLength - 1];
        arrLength--;
    }
    var final = results.join('');
    return final;
}

console.log(reverse("cardiel"));
// console.log(reverse2("cardiel"));
module.exports = reverse;
// module.exports = reverse2;
