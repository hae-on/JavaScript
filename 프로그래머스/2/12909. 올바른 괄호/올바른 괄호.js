function solution(s){
    var answer = true;
    let right = 0;
    let left = 0;
    
    if(s[s.length-1] === '(') return false;
    
    for(let i=0; i<s.length; i++){
      if(s[i] === "("){
          left++;
      }  
        if(s[i] === ")"){
            right++;
        }
       
        if(right>left){
            return false;
        }
    }
        if(left !== right){
            return false;
        }
            return true;
        }