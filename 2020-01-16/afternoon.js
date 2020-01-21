let result = _______;

result = result + 1;
result += 1;
result++;

function countLetter(string, targetLetter) {
  let i = 0;
  let counter = 0;

  while (i < string.length) {
    if (string[i] === targetLetter) {
      counter += 1;
    } else {
      counter += 0;
    }

    i += 1;
  }

  return counter;
}

// Now counter will hold the desired value

function isPrime(num) {
  let i = 1;

  while (i < num) {
    i += 1;

    if (num % i === 0) {
      return false;
    }

  }

  return true;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
