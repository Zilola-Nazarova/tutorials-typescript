# tutorials-typescript
## Node.js
Make sure the node.js is up to date:
1. Update nvm `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
2. Check installed node version `nvm list`
3. Check node latest stable version `nvm version-remote --lts`
4. Install latest stable version `nvm install --lts`

## Compiler
Compile TypeScript into JavaScript:  
`tsc sandbox.ts`  
Watch and compile TypeScript into JavaScript:  
`tsc sandbox.ts -w`

## tsconfig
Initializes config file:
`tsc --init`
Prevents from creating another 'src' folder:
`"rootDir": "./src"`
Places compiled files in 'public' folder:
`"outDir": "./public"`
Compiles only files in 'src' folder:
`"include": ["src"]`

## Inference
TypeScript tries to infer the type when possible.
```js
let character = 'luigi'; // string type
character = 20; // error
```
### Array Inference
```js
let numbers = [10, 20, 30, 40]; // array of numbers
numbers.push('shaun'); // error
let mixed = ['ken', 4, 'chun-li', 8, 9]; // array of numbers/strings
mixed[0] = 3; // valid
mixed[0] = true; // error
```
### Object Inference
We can't change the property types or add/remove properties.
```js
// object with 3 props
let ninja = {
  name: 'mario', // string type
  belt: 'black', // string type
  age: 30 // number type
};
// error
ninja.name = 30;
// error
ninja = {
  name: 'yoshi',
  belt: 'orange',
};
// error
inja.skills = ['fighting', 'sneaking'];
```
## Explicit Types
We can declare variable type explicitly:
```js
let age: number;
age = 'luigi'; // error
age = 30; // valid
```
We can declare array element types explicitly:
```ts
let ninjas: string[] = [];
ninjas.push('shaun'); // valid
ninjas.push(5); // error
ninjas = ['yoshi', 'mario']; // valid
ninjas = [10, 23]; // error
```
We can declare object (object property) types explicitly:
```ts
// vast
let ninjaOne: object;
// can add/remove properties, then change property types
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // valid because array is a type of object
ninjaOne = { name: 30, age: 'yoshi', beltColor: 'black' };
// more accurate
let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};
// can't add/remove properties, change property types
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black', skills: [] }; // error
ninjaTwo = {}; // error
ninjaTwo = { name: 'mario', age: 20 }; // error
```
### Union Types
For variables:
```ts
let uid: string | number;
// all valid
uid = '123';
uid = 123;
```
For array elements:
```ts
let mixed: (string | boolean)[] = [];
// all valid 
mixed.push('hello');
mixed.push(true);
```
### Any Type
Allows to change type (reverts Typescript). Use with caution.
```ts
let dynamic: any = 25;
dynamic = true;
```

## Functions
Typescript inferes function types:
```ts
let greet = () => { console.log('hello, world'); };
greet = 'hello'; // error
```
We can set function type explicitly:
```ts
let greet: Function;
greet = () => { console.log('hello, again'); };
greet = 'hello'; // error
```
### Arguments
We can set argument types:
```ts
const func1 = (a: number) => { console.log(a); };
// argument of union type
const func2 = (a: number | string) => { console.log(a); };
// optional argument (undefined if not provided)
const func3 = (a?: number | string) => { console.log(a); };
// argument with default value
// !should come after required args
const func4 = (a: number | string = 5) => { console.log(a); };
```
Otherwise we get warning about 'any' type params.
### Output
Typescript inferes the type of the function output:
```ts
const minus = (a: number, b: number) => {
  return a - b;
};
let result = minus(10, 7); // infernece => number
result = 'minus'; // error
```
We can explicitly set the type of function output:
```ts
const minus = (a: number, b: number) : number => {
  return a - b;
};
```

## Type Aliases
We can give names to custom types:
```ts
type StringOrNum = string | number;
type userObj = { name: string, uid: StringOrNum };
```
And reuse these types later:
```ts
const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
```
