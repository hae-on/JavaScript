function solution(arr) {
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let len = arr.length;
    
    return totalSum / len;
}