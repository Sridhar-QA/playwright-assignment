/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/

function moveZerosToEndWithExtraSpace(nums) {
    let modifiedArr = [];
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]!=0) {
            modifiedArr.push(nums[i]);
        }
    }

    let numberOfZeros = nums.length - modifiedArr.length;
    let zeroCounter = 0;
    while ( zeroCounter < numberOfZeros) {
        modifiedArr.push(0);
        zeroCounter++;
    }
    return modifiedArr;
}

//without extra space
function moveZeroToEndOptimized(nums) {
    let originalLength = nums.length;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] == 0) {
            nums.splice(i,1);
        }
    }
    let remainingZeros = originalLength - nums.length;
    let counter = 0;
    while(counter < remainingZeros) {
        nums.push(0);
        counter++;
    }
    return nums;
}
// let nums = [0,1,0,3,12]
let nums = [0];
console.log(moveZerosToEndWithExtraSpace(nums));
console.log(moveZeroToEndOptimized(nums));