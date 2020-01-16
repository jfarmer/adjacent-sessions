// let doTheWaffle = function() { ... }

function doTheWaffle(firstNumber, secondNumber) {
  let result;

  if (firstNumber > secondNumber) {
    result = firstNumber;
  } else {
    result = secondNumber;
  }

  console.log(result);
  return 90;
}

let potato;

console.log('---------------------');
console.log('Do the waffle with 20,20');

potato = doTheWaffle(20, 20);

console.log('Potato is:', potato);


console.log('---------------------');
console.log('We are doing the waffle with 40,20');

potato = doTheWaffle(40, 20);

console.log('Now potato is:', potato);

console.log('---------------------');
console.log('We are doing the waffle with 10,30');

potato = doTheWaffle(10, 30);

console.log('Now potato is:', potato);
