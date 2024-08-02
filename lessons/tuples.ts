// array of numbers/strings/booleans
let arr = ['ryu', 25, true]; // inference
// we can change types
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

// tuples
let tup: [string, number, boolean] = ['ryu', 25, true];
// can't change types
tup[0] = 'shaun';
// tup[0] = 5;

let student: [string, number];
// can't change type order
student = ['chun-li', 223423];
// student = [223423, 'chun-li'];