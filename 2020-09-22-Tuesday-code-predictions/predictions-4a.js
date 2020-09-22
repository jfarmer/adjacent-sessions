function add(x, y) {
  return x + y;
}

function isPositive(someStupidNumber) {
  if (someStupidNumber > 0) {
    return true;
  } else {
    return false;
  }
}

function bark() {
  console.log('woof bark awoooo');

  return 20;
}

let firstResult = bark();
let secondResult = bark();
let thirdResult = bark();

console.log('1. firstResult is:', firstResult);
console.log('2. secondResult is:', secondResult);
console.log('3. thirdResult is:', thirdResult);
