let papaya = function(firstNumber, secondNumber) {
  let potato;

  console.log('0. ------------------');

  if (firstNumber < secondNumber) {
    console.log('1. We are here, the first bit.');
    potato = firstNumber
  } else {
    console.log('2. The second bit.');
    console.log('3. Here potato is: ' + potato);
    potato = secondNumber;
    console.log('4. But here potato is: ' + potato);
  }

  console.log('5. What about down here?');
  console.log('6. #### Result is: ' + potato);

  return potato;
}

let hello;

console.log('7. ??????????????');
hello = papaya(10, 20);
console.log('8. papaya(10,20) is:         ', hello);

hello = papaya(20, -1000);
console.log('9. papaya(20,-1000) is:         ', hello);

console.log('10. !!!!!!!!!!!!!!!');
