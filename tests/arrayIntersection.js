/*Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

// let nums1 = [1,2,2,1]
// let nums2 = [2,2]

let nums1 = [4,9,5]; 
let nums2 = [9,4,9,8,4];

let intersectionArray = [];

for(let i = 0; i< nums1.length && i< nums2.length; i++) {
    if(nums1.indexOf(nums2[i]) >=0 && intersectionArray.indexOf(nums2[i]) == -1) {
        intersectionArray.push(nums2[i]);
    }
}

console.log(intersectionArray);