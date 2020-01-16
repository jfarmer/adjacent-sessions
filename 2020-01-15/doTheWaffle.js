// let doTheWaffle = function() { ... }

function doTheWaffle(firstNumber, secondNumber) {
  let result;

  console.log('The first number is:', firstNumber);
  console.log('The second number is:', secondNumber);

  if (firstNumber > secondNumber) {
    console.log('First branch running');
    result = 'bananas';
  } else if (firstNumber < secondNumber) {
    console.log('Second branch running');
    result = 'tomatoes';
  } else {
    console.log('Third branch running');
    result = 'pineapples';
  }

  console.log('We have left the branching');
  result = 'melons';

  console.log(result);
}

console.log('Do the waffle!');
doTheWaffle(20, 20);

console.log('---------------------');

console.log('We are doing the waffle again');
doTheWaffle(10, 20);
