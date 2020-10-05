let names = [
  'Jesse',
  'Kevin',
  'Liam',
  'Kyle',
  'Natalie',
  'Tsega-Ab',
];
let numIterations = names.length;

console.log('=================')
console.log('Starting while loop:')
console.log('=================')
console.log('');

let counter = 0;
while (counter < numIterations) {
  let value = names[counter];

  console.log(`[while] The counter is: ${counter}`);
  console.log(`[while] The value is: ${value}`);
  console.log('----------');

  counter = counter + 1;
}
console.log('');
console.log('=================')
console.log('Ended while loop')
console.log('=================')
console.log('');

console.log('=================')
console.log('Starting for loop:');
console.log('=================')

for(let i = 0; i < numIterations; i = i + 1) {
  let value = names[i];

  console.log(`[for] The counter is: ${i}`);
  console.log(`[for] The value is: ${value}`);
  console.log('----------');
}

console.log('=================')
console.log('Ended for loop');
console.log('=================')
