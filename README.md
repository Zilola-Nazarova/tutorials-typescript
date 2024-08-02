# tutorials-typescript
## Node.js
Make sure the node.js is up to date:
1. Update nvm `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
2. Check installed node version `nvm list`
3. Check node latest stable version `nvm version-remote --lts`
4. Install latest stable version `nvm install --lts`

## Compiler
Installation:
`npm install -g typescript`
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
### Signatures
We can explicitly set the type of function input/output (signature):
```ts
let logDetails: (obj: { name: string, age: number }) => void;
type person = { name: string, age: number };
logDetails = (ninja: person) /* the same input quantity/types */ => {
  console.log(`${ninja.name} is ${ninja.age} years old`); // returns void (inference)
};
// the names of the inputs may differ
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`); // inference => void
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

## DOM & Type Casting
The ! sign is used to indicate that the element exists in the DOM:
```ts
const anchor = document.querySelector('a');
console.log(anchor.href); // warning that anchor might be null
const anchor = document.querySelector('a')!;
console.log(anchor.href); // no warning
```
Types Casting is required when element is selected not by element name:
```ts
// HTML element is selected by class
// Typescript doesn't know the element name
const form = document.querySelector('.new-item-form') as HTMLFormElement;
```
### Event Type
```ts
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  // do something
});
```

## Classes
```ts
class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter = new Greeter("world");
```
### Access modifiers
By default all class props are public.

Public - can read/change from outside/inside:
```ts
class Invoice {
  public client: string;

  constructor(c: string) {
    this.client = c;
  }

  changeClient() {
    this.client = 'something else';
  }

  readClient() {
    return `${this.client} ...`;
  }
}

const inv = new Invoice('mario');

inv.client = 'something else'; // ok
console.log(inv.client); // ok
inv.changeClient(); // ok
inv.readClient(); // ok
```
Private - can read/change only from inside:
```ts
class Invoice {
  private client: string;

  constructor(c: string) {
    this.client = c;
  }

  changeClient() {
    this.client = 'something else';
  }

  readClient() {
    return `${this.client} ...`;
  }
}

const inv = new Invoice('mario');
inv.client = 'something else'; // error
console.log(inv.client); // error
inv.changeClient(); // ok
inv.readClient(); // ok
```
Readonly - can read from outside/inside, but can't change:
```ts
class Invoice {
  readonly client: string;

  constructor(c: string) {
    this.client = c;
  }

  changeClient() {
    this.client = 'something else'; // error
  }

  readClient() {
    return `${this.client} ...`;
  }
}

const inv = new Invoice('mario');
inv.client = 'something else'; // error
console.log(inv.client); // ok
inv.changeClient(); // error
inv.readClient(); // ok
```

### Constructor Shorthand
We can declare properties inside the constructor if access modifiers provided for each property:
```ts
class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
}
// the shorthand
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
}
```
This feature doesn't work without access modifiers:
```ts
class Invoice {
  constructor(
    client: string,
    details: string,
    amount: number
  ) {}
}
```

## Modules
When working with modules in TypeScript:
1. compiles code that only modern browsers understand
2. doesn't bundle modules into single file
Webpack is be needed to solve this problem.

Add a script with imports to HTML - add type "module":
```html
<script type="module" src='app.js'></script>
```
Export something in TypeScript:
```ts
export class Invoice {
  // rest of the code
}
```
Import something into TypeScript:
```ts
// import .js file (not .ts)
import { Invoice } from './classes/invoice.js'; 
```

## Interfaces
Interface inforces certain structure of the class/object. 
```ts
interface IsPerson {
  name: string,
  speak(a: string): void;
}
```
We can't generate objects based on interface, but we can create objects of interface type.
```ts
const me: IsPerson = {
  name: 'shaun',
  speak(text: string): void {
    console.log(text);
  },
};
```
We can enforce function arguments to match certain interface:
```ts
const greetPerson = (person: IsPerson) => {
  console.log(`Hello ${person.name}`);
};
```
We can enforce array elements to match certain interface:
```ts
let people: IsPerson[] = [];
```
The way to structure the code:
```ts
interface HasFormatter {
  format(): string;
}

class Invoice implements HasFormatter {
  // the rest of the code
}

let docOne: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);

let docs: HasFormatter[] = [];
docs.push(docOne);
```

## Generics
Generics allow us to provide a variety of types:
```ts
const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
// string and objects are ok
let doc1 = addUID({ name: 'yoshi', age: 40 });
let doc2 = addUID('hello');
// we can access props
console.log(doc1.name);
```
Without generics we can't access properties of vague 'object' types:
```ts
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
let doc = addUID({ name: 'yoshi', age: 40 });
console.log(doc.name); // error
```
We can restrict the types to follow certain structure:
```ts
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
```
### Generics in Interfaces
```ts
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const doc: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll']
}
```

## Enums
Enums - special type that allows to store a set of constants/keywords and associate them with numeric values.
```ts
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
  uid: number;
  resourceName: ResourceType; // allows to use enum
  data: T;
}

const doc1: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.AUTHOR, // becomes 1 (index of AUTHOR)
  data: { name: 'shaun' }
}
```