function solution(s) {
    var answer = '';
    let result = [];
    let str = s.split(' ');
    
    result.push(Math.min(...str))
    result.push(Math.max(...str))

    return result.join(' ');
}
