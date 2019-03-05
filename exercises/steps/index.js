// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    var initArray = [];
    for(var i = 0; i < n; i++) {
        initArray.push('#');
    }
    var blankArray = [];
    for(var i = 0; i < n; i++) {
        blankArray.push(' ');
    }
    // console.log("blank", blankArray);
    for(var i = 1; i <= n; i++) {   
        console.log(initArray.slice(0, i).join("") + blankArray.slice(0, n - i).join(""));
    }
}

console.log(steps(7));
module.exports = steps;
