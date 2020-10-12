console.log('=========================');
console.log('Number time!');
console.log('=========================');
console.log('');

let num1 = 123;
let num2 = 8;

console.log(`The value of num1 is: ${num1}`);
console.log(`The value of num2 is: ${num2}`);

console.log('');

let sum = num1 + num2;
console.log(`The sum of num1 and num2 is: ${sum}`);

let difference = num1 - num2;
console.log(`The difference between num1 and num2 is: ${difference}`);

let product = num1 * num2;
console.log(`The product of num1 and num2 is: ${product}`);

console.log();

let quotient = num1 / num2;
console.log(`The quotient of num1 and num2 is: ${quotient}`);

let floor = Math.floor(num1 / num2)
console.log(`The floor of num1 and num2 is: ${floor}`);

let remainder = num1 % num2;
console.log(`The remainder of num1 after dividing by num2 is: ${remainder}`);

console.log();

let power = num1 ** num2;
console.log(`The power ${num1}**${num2} is: ${power}`);

console.log('');
console.log('=========================');
console.log('Manipulating numbers');
console.log('=========================')

let blah = 4560;
let rightMostDigit = blah % 10;

console.log(`The value of blah is ${blah}`);

// console.log(`The right most digit of ${blah} is: ${rightMostDigit}`);
console.log('');

// blah++
// blah += 1
blah = blah + 1;
console.log(`The value of blah is now: ${blah}`);

blah += 2;
console.log(`The value of blah is now: ${blah}`);

blah += 3;
console.log(`The value of blah is now: ${blah}`);

let k = 232372;
blah += k;
console.log(`The value of blah is now: ${blah}`);
