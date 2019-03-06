// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var maxLength = (n - 1) + n;
    var length = 0;
    var sideSpaces;
    for(var i = 1; i <= n; i++) {
        length = (i - 1) + i;
        sideSpaces = (maxLength - length) / 2;
        console.log(" ".repeat(sideSpaces) + '#'.repeat(length) + " ".repeat(sideSpaces));
    }
}

console.log(pyramid(8));

module.exports = pyramid;
