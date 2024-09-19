/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = '';

    for(let i = digits.length -1; i>=0; i--){
        digits[i]++;

        if(digits[i] === 10) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    return [1, ...digits];
};