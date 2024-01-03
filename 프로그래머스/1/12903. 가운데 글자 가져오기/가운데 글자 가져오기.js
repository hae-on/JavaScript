function solution(s) {
    let answer = '';
    const strLen = s.length;
    if(strLen % 2 !== 0){
        answer = s[Math.floor(s.length / 2)];
    } else {
        answer = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
    }
    return answer;
}