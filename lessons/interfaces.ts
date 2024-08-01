import { Invoice } from '../src/classes/invoice.js';
import { Payment } from '../src/classes/Payment.js';
import { HasFormatter } from '../src/interfaces/HasFormatter.js';

interface IsPerson {
  name: string,
  age: number,
  speak(a: string): void;
  spend(a: number): number;
}

// const me: IsPerson = {};
const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
  // skills: []
};

console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log(`Hello ${person.name}`);
};

// greetPerson({ name: 'zilola' });
greetPerson(me);

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);
