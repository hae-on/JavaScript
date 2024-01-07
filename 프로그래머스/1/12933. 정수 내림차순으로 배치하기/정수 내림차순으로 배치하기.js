function solution(n) {
    let num = String(n).split('').sort((a, b) => b - a).join('');
    return Number(num);
}