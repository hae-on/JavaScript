function solution(s)
{
    var answer = -1;
    let stack = [];
    
    for(let i=0; i<s.length; i++){
        stack.push(s[i])
        if(stack[stack.length-1] === stack[stack.length-2]) {
        stack.pop();
        stack.pop();
        }
    }
    

    return answer  = stack.length ? 0 : 1;
}