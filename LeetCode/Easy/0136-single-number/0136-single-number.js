/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {};
    for(let num of nums){
        obj[num] = (obj[num] || 0) + 1;
    }
    const answer = Object.keys(obj).find(key => obj[key] === 1);
    return Number(answer)
};