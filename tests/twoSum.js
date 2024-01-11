/* Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)
*/

function twoSum(nums, target) {
    for(let i=0; i<nums.length; i++) {
        // console.log(nums[i], nums.indexOf(target - nums[i]))
        if(nums.indexOf(target - nums[i]) != -1){
            console.log(`(${nums.indexOf(nums[i])}, ${nums.indexOf(target - nums[i])})`)
            nums[i] = 0;
            nums[target - nums[i]] = 0;
        }
    }
}

const nums = [2,4,7,8,11,14];
const target = 18;
twoSum(nums, target)

