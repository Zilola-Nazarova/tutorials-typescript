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
