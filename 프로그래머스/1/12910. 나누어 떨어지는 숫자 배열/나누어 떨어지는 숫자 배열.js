function solution(arr, divisor) {
    var answer = [];
    arr.filter((el) => {
        if(el % divisor === 0) answer.push(el);
})
    return answer.length ? answer.sort((a, b) => a - b) : [-1] ;
}