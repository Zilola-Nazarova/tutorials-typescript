// classes
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    // this.client = 'something else';
    this.details += '!';
    this.amount++;
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'yoshi';
// invOne.details = 'something else';
invTwo.amount = 400;

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
  // console.log(inv.details);
})
