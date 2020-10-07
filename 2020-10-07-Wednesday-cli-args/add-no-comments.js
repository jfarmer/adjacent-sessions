let process = require('process');

let commandLineArgs = process.argv;

let subCommand = commandLineArgs[2];
let firstUserArg = commandLineArgs[3];
let secondUserArg = commandLineArgs[4];

let leftOperand = Number.parseFloat(firstUserArg);
let rightOperand = Number.parseFloat(secondUserArg);

if (subCommand === undefined || firstUserArg === undefined || secondUserArg === undefined) {
  console.log('Error: Missing at least one summand');
  console.log('Usage: node add.js <subCommand> <leftOperand> <rightOperand>');

  process.exit(1);
}

if (Number.isNaN(leftOperand) || Number.isNaN(rightOperand)) {
  console.log('Error: Summands must be numbers.');
  console.log('Usage: node add.js <subCommand> <leftOperand> <rightOperand>');

  process.exit(1);
}

if (subCommand === 'add') {
  let result = leftOperand + rightOperand;

  console.log(`${leftOperand} + ${rightOperand} = ${result}`);
} else if (subCommand === 'multiply') {
  let result = leftOperand * rightOperand;

  console.log(`${leftOperand} * ${rightOperand} = ${result}`);
} else {
  console.log(`Error: unknown sub-command '${subCommand}'`);
  process.exit();
}
