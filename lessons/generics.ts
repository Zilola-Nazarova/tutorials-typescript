
const addUID1 = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
let docOne = addUID1({ name: 'yoshi', age: 40 });
// console.log(docOne.name);
console.log(docOne);


const addUID2 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
let docTwo = addUID2({ name: 'yoshi', age: 40 });
let docThree = addUID2('hello');
console.log(docTwo.name);
console.log(docThree);


const addUID3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
let docFour = addUID3({ name: 'yoshi', age: 40 });
// let docFive = addUID3('hello');


const addUID4 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
let docSix = addUID4({ name: 'yoshi', age: 40 });
// let docSeven = addUID4({ name: 15, age: 40 });
// let docEight = addUID4({ age: 40 });


// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const docNine: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' }
}
const docTen: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll']
}
