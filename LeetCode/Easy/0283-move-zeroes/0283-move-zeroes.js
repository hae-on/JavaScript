/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    let index = 0;
    while(nums.length >= index){
        if(nums[index] === 0) {
            nums.splice(index, 1);
            count++;
        } else {
            index++;
        }    
    }
    for(let i=0; i<count; i++){
        nums.push(0);
    }

    return nums;
};