function solution(strArr) {
    var answer = 0;
    const dict = {};
    strArr.forEach(item => {
        const len = item.length;
        dict[len] = dict[len] || [];
        dict[len].push(item);
    })
    
    Object.values(dict).forEach((v) => {
        if(answer < v.length) answer = v.length
    })
    
    return answer;
}