// 베열의 함수들
// 베열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍋', '🍌', '🍊', '🍏'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray({})); //false

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); //-1
console.log(fruits.indexOf('🍊')); //2

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍋')); //true

// 추가 - 제일 뒤
let length = fruits.push('🥝');
console.log(fruits); //배열 자체를 변경(업데이트) [ '🍋', '🍌', '🍊', '🍏', '🥝' ]
console.log(length); //5

// 추가 - 제일 앞
length = fruits.unshift('🍑');
console.log(fruits); //배열 자체를 변경(업데이트)[ '🍑', '🍋', '🍌', '🍊', '🍏', '🥝' ]
console.log(length); //6

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits); //배열 자체를 변경(업데이트)[ '🍑', '🍋', '🍌', '🍊', '🍏' ]
console.log(lastItem); //🥝

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits); //배열 자체를 변경(업데이트)[ '🍋', '🍌', '🍊', '🍏' ]
console.log(lastItem); //🍑

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); //배열 자체를 변경(업데이트)[ '🍋', '🍊', '🍏' ]
console.log(deleted); //[ '🍌' ]
fruits.splice(1, 0, '🍉', '🍇');
console.log(fruits); //[ '🍋', '🍉', '🍇', '🍊', '🍏' ]

console.clear();
// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr); //[ '🍋', '🍉' ]
console.log(fruits); //[ '🍋', '🍉', '🍇', '🍊', '🍏' ]

newArr = fruits.slice();
console.log(newArr); //[ '🍋', '🍉', '🍇', '🍊', '🍏' ] 변화 없음

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); //[ 6, 5, 4, 3, 2, 1 ]

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr.flat()); //[ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); //배열 자체를 수정
console.log(arr); //[ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr); //[ 0, 's', 's', 0, 0, 0 ]

arr.fill('s', 1);
console.log(arr); //[ 0, 's', 's', 's', 's', 's' ]

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); //0,s,s,s,s,s
