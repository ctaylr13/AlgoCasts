// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // Check to see if the strings are the same length
    // if not return false 
    if (stringA.length != stringB.length) {
        return false;
    } else {
        // remove characters and spaces
        var newA = stringA.replace(/[^\w]/g, "");
        var newB = stringB.replace(/[^\w]/g, "");
        // convert to lower case 
        newA = newA.toLowerCase();
        newB = newB.toLowerCase();
        // create string A character map 
        const newAMap = {};
        for (let x of newA) {
            if(newAMap[x]) {
                newAMap[x]++;
            } else {
                newAMap[x] = 1;
            }
        }

        // Create string b character map
        const newBMap = {};
        for (let y of newB) {
            if(newBMap[y]) {
                newBMap[y]++;
            } else {
                newBMap[y] = 1;
            }
        }

        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(newAMap);
        var bProps = Object.getOwnPropertyNames(newBMap);

        // loop over to contents
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if(newAMap[propName] !== newBMap[propName]) {
                return false;
            }
        }
        return true;

    }

    
}

var string1 = "race Car";
var string2 = "carRace!"

anagrams(string1, string2);

module.exports = anagrams;
