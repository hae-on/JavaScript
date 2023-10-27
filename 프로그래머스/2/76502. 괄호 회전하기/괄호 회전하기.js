function solution(s) {
    var answer = 0;
    let stack = [];
    let flag = true;
    
     if (s.length % 2 === 1) return 0;
    
    for (let i = 0; i < s.length; i++){
        flag = true;
        let candidate = s.slice(i) + s.slice(0, i);
        
        for(let str of candidate){
            if(str === '(' || str === '[' || str === '{'){
                stack.push(str)
            } else {
                const stackItem = stack.pop();
                if(str === ')' && stackItem === '(') continue;
                if(str === '}' && stackItem === '{') continue;
                if(str === ']' && stackItem === '[') continue;
                flag = false;
                break;
            }
        }
        if(flag) answer++;
    }
    return answer;
}