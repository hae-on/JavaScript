function solution(arr) {
    let min = Math.min(...arr);
    if(arr.length <= 1) return [-1];
    else return arr.filter((el) =>
       el !== min)
}