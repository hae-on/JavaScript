function solution(nums) {
    let answer;
    const canChoiceNumber = nums.length / 2;
    const setNumber = [...new Set(nums)].length;
    
    canChoiceNumber < setNumber ? answer = canChoiceNumber : answer = setNumber;
    
    return answer
}