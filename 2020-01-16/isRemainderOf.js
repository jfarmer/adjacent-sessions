function isRemainderOfOld(n, d) {
  return n % d;
}

function getRemainder(outside, inside) {
  let debug = false;
  let i = 1;

  if (debug) {
    console.log('At start, outside is:', outside);
    console.log('At start, inside is:', inside);
    console.log('Entering loop (I hope):');
    console.log('============');
  }

  while (outside * i <= inside) {
    if (debug) {
      console.log('i is:', i);
      console.log('outside is:', outside);
      console.log('inside is:', inside);
      console.log('outside * i is', outside * i);
      console.log('------------');
    }

    i += 1;
  }

  if (debug) {
    console.log('---> Done with the while loop');

    console.log('i is:', i);
    console.log('outside is:', outside);
    console.log('inside is:', inside);
    console.log('outside * i is', outside * i);
    console.log('******************');
  }

  let quotient = i - 1;

  if (debug) {
    console.log('quotient is:', quotient);
  }

  return inside - outside * quotient;
}

function isRemainder(n, d) {
  return getRemainder(n, d) === 0;
}

let testValue;

testValue = getRemainder(15, 134);
console.log('getRemainder(15, 134) is: ' + testValue);

testValue = getRemainder(2, 2);
console.log('getRemainder(2, 2) is: ' + testValue);

testValue = getRemainder(2, 4);
console.log('getRemainder(2, 4) is: ' + testValue);

testValue = getRemainder(2, 0);
console.log('getRemainder(2, 0) is: ' + testValue);
