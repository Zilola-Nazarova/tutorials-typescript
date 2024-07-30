// INFERENCE
let character = 'luigi';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'mario';
// age = 'yoshi';
age = 40;
// isBlackBelt  = 'yes';
isBlackBelt  = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(circ('hello'));
console.log(circ(7.5));

// ARRAYS INFERENCE
let names = ['luigi', 'mario', 'yoshi']; // inference -> string
names.push('toad');
// names = 'hello';
// names.push(3);
// names[0] = true;

let numbers = [10, 20, 30, 40]; // inference -> number
numbers.push(25);
// numbers.push('shaun');
// numbers[1] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9]; // inference -> number/string
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// mixed[0] = true;

// OBJECTS INFERENCE
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.name = 30;
// ninja.skills = ['fighting', 'sneaking'];
// ninja = 'string';

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40
};
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
// };
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   skills: ['fighting', 'sneaking']
// };
