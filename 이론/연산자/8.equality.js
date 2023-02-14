// 동등 비교 관계 연산자
// == 값이 같음
// != 값이 다름
//  === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 2); // true
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(true == 1); // true
console.log(true === 1); // false

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj2 == obj3); // true
console.log(obj2 === obj3); // true
