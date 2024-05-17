function solution(x) {
    let str = String(x);
    let sum = 0;
    str.split('').forEach((el) => {
        sum += Number(el)
    })
    return x % sum === 0 ? true : false; 
}
// return!(x % String(x).split("").reduce((a,b)=>+a + +b));