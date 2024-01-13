/*Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]
*/

function removeDuplicates(inputArray) {
    let numCount = {};
    let resultArray = [];
    for(let i = 0; i<inputArray.length; i++) {
        if(!numCount[inputArray[i]]){
            numCount[inputArray[i]] = 0;
        }
    }
    for(let i = 0; i<inputArray.length; i++) {
        numCount[inputArray[i]]++;
    }
    for(let i = 0; i<inputArray.length; i++) {
        if(numCount[inputArray[i]] > 1){
            resultArray.push(inputArray[i]);
            numCount[inputArray[i]] = 0;
        }else if (numCount[inputArray[i]]) {
            resultArray.push(inputArray[i]);
            numCount[inputArray[i]] = 0;
        }
    }
    return resultArray
}

let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
// let inputArray = [1, 2, 3, 1, 20, 21, 1, 3, 6]
console.log(removeDuplicates(inputArray))