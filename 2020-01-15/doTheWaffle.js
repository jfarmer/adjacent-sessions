let doTheWaffle = function(firstNumber, secondNumber) {
  let result;

  console.log('1. The first number is:', firstNumber);
  console.log('2. The second number is:', secondNumber);

  if (firstNumber > secondNumber) {
    console.log('3. First branch running');
    result = 'bananas';
  } else if (firstNumber < secondNumber) {
    console.log('4. Second branch running');
    result = 'tomatoes';
  } else {
    console.log('5. Third branch running');
    result = 'pineapples';
  }

  console.log('6. We have left the branching');
  result = 'melons';

  console.log(result);
}

console.log('7. Do the waffle!');
doTheWaffle(20, 20);

console.log('8.---------------------');

console.log('9. We are doing the waffle again');
doTheWaffle(10, 20);
