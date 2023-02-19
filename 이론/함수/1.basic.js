function add(a, b) {
  return a + b;
}
add(1, 2);

let lastName1 = '김';
let firstName1 = '지수';
let fullName1 = `${lastName1}${firstName1}`;
console.log(fullName1);

let lastName2 = '김';
let firstName2 = '철수';
let fullName2 = `${lastName2}${firstName2}`;
console.log(fullName2);

function fullName(firstName, lastName) {
  return `${lastName}${firstName}`;
}
