function solution(array, commands) {
    let answer = [];
    for(let i=0; i < commands.length; i++){
        const [a, b, k] = commands[i];
        const numArr = array.slice(a - 1, b).sort((a, b) => a - b);
        answer.push(numArr[k - 1])
    }
    return answer;
}