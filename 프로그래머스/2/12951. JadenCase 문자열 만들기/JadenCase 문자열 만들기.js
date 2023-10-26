// function solution(s) {
//     s = s.toLowerCase()
    
//     let answer = s.split(' ').map((value) => {
//         let str = value.split('')
//         if(str[0] !== null){
//             str[0] = str[0].toUpperCase();
//             return str.join('')
//         }    
//     }).join(' ')
    
//     return answer;
// }

function solution(s) {
    s= s.toLowerCase();
   let answer = s.split(' ').map(s => {
       let arr = s.split('');
       if(arr[0] != null){
           arr[0]=arr[0].toUpperCase();
          return arr.join(''); 
       }
       
   }).join(' ');
    return answer;
}