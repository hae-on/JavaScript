// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog.name); //와우
dog.age = 4;
console.log(dog.age); //undefined
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog); //{ name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }

// 밀봉! Object.seal 값의 수정 ⭕️, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
// console.log(cat); //{ name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }
Object.seal(cat);
cat.name = '냐옹';
console.log(cat); //{ name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }
delete cat.emoji;
console.log(cat); //{ name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger); //{ name: '어흐응' }
delete tiger.name;
console.log(tiger); //{}
