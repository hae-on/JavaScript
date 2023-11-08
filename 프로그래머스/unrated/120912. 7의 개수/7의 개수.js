function solution(array) {
    var answer = 0;
    array.map((v) => {
        String(v).split('').map((i) => {
            if(i === '7') answer ++
        })
    })
    return answer;
}