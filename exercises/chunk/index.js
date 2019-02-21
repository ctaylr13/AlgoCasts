// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Create empty array to hold chuncks called 'total'
    const total = []; 
    // for each element in Array
    for (let x of array) {
        // retrieve the last element in total
        const last = total[total.length - 1];
        // if last element does not exist or if its length is equal to chunck size 
        if (!last || last.length === size) {
            // push a new chunk into total with the current element 
            total.push([x]);         
        // add the current element to the array 
        } else {
            last.push(x);
        }
    }
    return total;
}



module.exports = chunk;
