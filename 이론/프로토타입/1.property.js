const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
/**
 * {
  name: { value: '와우', writable: true, enumerable: true, configurable: true },
  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
}
 */

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc); //{ value: '와우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name); //멍멍
console.log(Object.keys(dog)); //[ 'emoji' ]
delete dog.name; //아무 변화 없음
