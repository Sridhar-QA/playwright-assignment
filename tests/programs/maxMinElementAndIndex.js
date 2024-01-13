/* Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let nums = [34, 7, 21, 89, 54, 10, 91, 67];

let maxElement = nums[0];
let maxIndex = 0;
let minElement = nums[0];
let minIndex = 0;

let index = 0;
while (index < nums.length) {
    if(nums[index] > maxElement) {
        maxElement = nums[index];
        maxIndex = index;
    }else if(nums[index] < minElement) {
        minElement = nums[index];
        minIndex = index;
    }
    index++;
}
console.log(`Maxmimum Element: ${maxElement} maxIndex: ${maxIndex}`)
console.log(`Minimum Element: ${minElement} minIndex: ${minIndex}`)