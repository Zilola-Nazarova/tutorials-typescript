// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has uid of ${uid}`);
// };

// const greet = (user: { name: string, uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
