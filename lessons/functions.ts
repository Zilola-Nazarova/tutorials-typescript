// FUNCTION INFERENCE
let greet = () => {
  console.log('hello, world');
};
// greet = 'hello';
greet = () => {
  console.log('hello');
};

// EXPLICIT FUNCTION TYPE
let greet1: Function;
greet1 = () => {
  console.log('hello, again');
};
// greet1 = 'hello';

// ARGUMENTS
const add = (a: number, b: number) => {
  console.log(a + b);
};
add(5, 10);

// default params (put at the end)
const add1 = (a: number, b: number, c: number | string = 100) => {
  console.log(c);
};
add1(5, 10);
add1(5, 10, 'aaa');

// optional params (put at the end)
const add2 = (a: number, b: number, c?: number | string) => {
  console.log(c);
};
add2(5, 10);
add2(5, 10, 25);

// output types
const minus = (a: number, b: number) => {
  return a + b;
};
let result = minus(10, 7); // inference => number
// result = 'string'

const minus1 = (a: number, b: number) : number => {
  return a + b;
};
