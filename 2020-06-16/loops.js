let count = 0;

console.log('Before loop:', count);
console.log('--------------------');

while (count < 5) {

  console.log('Start of loop:', count);
  count = count + 1;
  console.log('End of loop:', count);
  console.log('--------------------');

}

console.log('After loop:', count);

let count = 0;

while (count < 20) {
  console.log('The value of count is:', count);
  count = count + 2;
}

let numbers = [10, 20, 30, 40];

console.log('The length is:', numbers.length);

let i = 0;
while (i < numbers.length) {
  console.log('The i is:', i);
  console.log('The value is:', numbers[i]);
  console.log('-------------------');

  i = i + 1;
}

console.log('All done!');

let months = ['January', 'February', 'March', ...];

monthNum = 2;
