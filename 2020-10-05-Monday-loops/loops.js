// while loop

let firstArg = process.argv[2];

console.log('process.argv is:', process.argv);

console.log(`0. The first argument is ${firstArg}`);

console.log('1. Before while...');

let count = 1;
let numIterations = Number.parseInt(firstArg);

if (!Number.isInteger(numIterations)) {
  console.log(`Error: First argument must be an integer, received: '${firstArg}'`);
  process.exit();
}

while (count <= numIterations) {
  console.log(`The count is ${count}`);

  count = count +  1;
}

console.log('2. After while...');
