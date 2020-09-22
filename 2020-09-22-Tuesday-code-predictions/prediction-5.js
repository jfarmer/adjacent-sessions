function doSomethingAmazing(firstNumber, secondNumber) {
  console.log('1. Time to go!');

  let result = 'waffles';

  console.log('2. The first number is:', firstNumber);
  console.log('3. The second number is:', secondNumber);
  console.log('4. result is:', result);

  if (firstNumber > secondNumber) {
    console.log('5. This is the first branch.');

    result = 'bananas';
  } else {
    console.log('6. This is the second branch.');

    result = 'papayas';
  }

  console.log('7. Now we are down here.');
  console.log('8. After all that, result is:', result);

  return result;
}

console.log('9. She sells sea shells by the sea shore.');

let potato = 'blub blub blub';

console.log('10. At this point, the value of potato is:', potato);

potato = doSomethingAmazing(509, 100);

console.log('11. Afterwards, the value of potato is:', potato);

potato = doSomethingAmazing(-100, 47);

console.log('12. Finally, the value of potato is:', potato);
