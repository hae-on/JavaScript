function solution(s){
    let stack = [];
    
    for(let i=0; i<s.length; i++){
        if(s[0] === ')') return false;
        else if(s[i] === '(') stack.push(s[i]);
        else if(s[i] === ')' && stack.length > 0) stack.pop();
    }
    
    return stack.length === 0;
    console.log(stack)
}