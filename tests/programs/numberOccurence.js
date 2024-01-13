/*Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count
*/

function numberOfOccurence(nums,k) {
    let count = 0;
    for(let i =0; i<nums.length; i++) {
        if(k == nums[i]) {
            count++;
        }
    }
    return count;
}
const nums = [2,4,5,2,1,2];
const k = 2
console.log(numberOfOccurence(nums, k))