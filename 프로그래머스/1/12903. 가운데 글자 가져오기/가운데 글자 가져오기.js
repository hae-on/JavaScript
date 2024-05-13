function solution(s) {
    let answer = '';
    if(s.length % 2 !== 0){
        answer = s[Math.floor(s.length / 2)]
    } else {
        answer = s.slice((s.length / 2) - 1, s.length / 2 + 1)
    }
    return answer;
}

//     if(s.length % 2 ===0){
//     let even = s.length / 2;
//     answer = s[even-1] + s[even];
// } 
// if(s.length % 2 === 1){
//     let odd = Math.floor(s.length/2);
//     answer = s[odd];
// }

// function solution(s) {
//   let answer = '';
//   const strLen = s.length;
//   if(strLen % 2 !== 0){
//       answer = s[Math.floor(s.length / 2)];
//   } else {
//       answer = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
//   }
//   return answer;
// }