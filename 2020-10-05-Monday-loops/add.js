let process = require('process');

let commandLineArgs = process.argv;

let firstUserArg = commandLineArgs[2];
let secondUserArg = commandLineArgs[3];

// The arguments arrive as strings, we need to convert them
// to numbers before we add them.
let leftSummand = Number.parseFloat(firstUserArg);
let rightSummand = Number.parseFloat(secondUserArg);

let sum = leftSummand + rightSummand;

console.log(`${leftSummand} + ${rightSummand} = ${sum}`);
