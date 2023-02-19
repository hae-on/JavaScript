const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}: 🍊`);
  },
};

console.log(apple); //{ name: 'apple', display: [Function: display] }
console.log(orange); //{ name: 'orange', display: [Function: display] }

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; //생략가능
}

const lemon = new Fruit('lemon', '🍋');
console.log(lemon); //Fruit { name: 'lemon', emoji: '🍋', display: [Function (anonymous)] }
console.log(lemon.emoji); //🍋
