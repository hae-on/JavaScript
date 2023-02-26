// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruit = ['🍎', '🍋', '🥝', '🍇'];
console.log(fruit[0]); //🍎
const [first, second, ...others] = fruit;
console.log(second); //🍋
console.log(others); //[ '🥝', '🍇' ]

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); //1
console.log(y); //2
console.log(z); //0

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title); //apple
console.log(emoji); //🍎

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name); //이름 Ellie
  console.log('나이', age); //나이 20
  console.log('직업', job); //직업 s/w engineer
}
display(ellie);

const { name, age, job, pet = '강아지' } = ellie;
console.log(name); //Ellie
console.log(age); //20
console.log(job); //s/w engineer
console.log(pet); //강아지

// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
