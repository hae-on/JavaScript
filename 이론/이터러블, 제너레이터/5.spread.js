// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums); //[ 0, 1, 2, 4 ]
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruit1 = ['🍎', '🍉'];
const fruit2 = ['🍋', '🍑'];
let arr = fruit1.concat(fruit2);
console.log(arr); //[ '🍎', '🍉', '🍋', '🍑' ]

arr = [...fruit1, '🍌', ...fruit2];
console.log(arr); //[ '🍎', '🍉', '🍌', '🍋', '🍑' ]

// Object
const ellie = { name: 'Ellie', age: 20 };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(updated); //{ name: 'Ellie', age: 20, job: 's/w engineer' }
