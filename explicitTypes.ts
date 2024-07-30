// EXPLICIT TYPES
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;
// isLoggedIn = 40;
isLoggedIn = true;

// IN ARRAYS
let ninjas: string[] = [];
ninjas.push('shaun');
// ninjas = [10, 23];
ninjas = ['yoshi', 'mario'];

// UNION TYPES
let mixed: (string|number|boolean)[] = []; 
mixed.push('hello');
mixed.push(20);
mixed.push(false);

let uid: string|number;
uid = '123';
uid = 123;
// uid = false;

// IN OBJECTS
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // valid because array is a type of object
// ninjaOne = 'hello';

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};

// ninjaTwo = {};
// ninjaTwo = { name: 'mario', age: 20 };
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
// ninjaTwo = { name: 'mario', age: 20, beltColor: 'black', skills: [] };
