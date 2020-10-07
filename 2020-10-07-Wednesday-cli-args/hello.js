let process = require('process');

// argument vector
// 1. What's the value of a variable?
// 2. What type of value is a variable?


// console.log('process.argv is:')
// console.log(process.argv);
// console.log('--------');

let arrayOfArguments = process.argv;
let name = arrayOfArguments[2];

console.log('name is:', name);

if (name === undefined) {
  console.log('Error: please supply a name.');
  process.exit();
}

console.log(`Hello, ${name}, how are you?`);

/*
- What's "argv"?
- What's "require"?
- What's "process.exit(1)"?
- What's the deal with "name === undefined"?
*/
