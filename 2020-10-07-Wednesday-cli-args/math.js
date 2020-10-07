function printUsage() {
  console.log();
  console.log('Usage (<...> denotes required argument):');
  console.log('  node add.js <operation> <leftOperand> <rightOperand>');
  console.log();
  console.log('Examples:');
  console.log('  node math.js add 17 99');
  console.log('  node math.js power 9 3');
  console.log('  node math.js multiply 18 -5');
  console.log();
  console.log('Supported operations:');
  console.log('  add, multiply, divide, power, meepmeep');
}

let process = require('process');

// Uncomment the following lines if you want to see
// the command line arguments
// console.log('command line args are:', process.argv);
// process.exit();

let commandLineArgs = process.argv;

let operation = commandLineArgs[2];
let firstUserArg = commandLineArgs[3];
let secondUserArg = commandLineArgs[4];

let leftOperand = Number.parseFloat(firstUserArg);
let rightOperand = Number.parseFloat(secondUserArg);

if (operation === undefined || firstUserArg === undefined || secondUserArg === undefined) {
  console.log('Error: Missing at least one argument');
  printUsage();
  process.exit(1);
}

if (Number.isNaN(leftOperand) || Number.isNaN(rightOperand)) {
  console.log('Error: Operands must be numbers.');
  printUsage();

  process.exit(1);
}

// Do something slightly different depending on the operation specified
if (operation === 'add') {
  let result = leftOperand + rightOperand;

  console.log(`${leftOperand} + ${rightOperand} = ${result}`);
} else if (operation === 'multiply') {
  let result = leftOperand * rightOperand;

  console.log(`${leftOperand} * ${rightOperand} = ${result}`);
} else if (operation === 'divide') {
  let result = leftOperand / rightOperand;

  console.log(`${leftOperand} / ${rightOperand} = ${result}`);
} else if (operation === 'power') {
  let result = leftOperand ** rightOperand;

  // We can display the results any way we want.
  console.log(`${leftOperand}^${rightOperand} = ${result}`);
} else if (operation === 'meepmeep') {
  console.log('OH YEAH MEEP TIME');
} else {
  console.log(`Error: unknown operation '${operation}'`);

  printUsage();
  process.exit();
}
