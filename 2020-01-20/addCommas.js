function reverse(string) {
  let newStr = '';

  for(let i = string.length-1; i >= 0; i--){
    newStr = newStr + string.charAt(i);
  }

  return newStr;
}

function join(array, char) {
  // Create working string for joining elements of array with commas.
  let workingString = '';

  // Use for loop to concatenate each element to the working string, + commas as needed
  for (let i = 0; i < array.length; i++){
    workingString += array[i];
    // For indices other than the last index, concatenate a comma.
    if (i < array.length - 1){
      workingString += char;
    }
  }
  return workingString;
}

function chunk(word){
  let arr = [];

  for(let i = 0; i < word.length; i+=3){
    arr.push(word.slice(i, i+3));
  }

  return arr;
}

function addCommas(num) {
  let word = String(num);
  let reversedWord = reverse(word);
  let chunkedWord = chunk(reversedWord);
  let joinedWord = join(chunkedWord, ',');
  let commaWord = reverse(joinedWord);

  return commaWord;
}

function addCommasNoVariables(num) {
  return reverse(join(chunk(reverse(String(num))), ','));
}

console.log('Running tests for reverse:')
console.log(reverse('') === '');
console.log(reverse('a') === 'a');
console.log(reverse('aaaabbbaaaa') === 'aaaabbbaaaa');
console.log(reverse('12345') === '54321');

console.log('-------');

console.log(join([], ',') === '');
console.log(join(['abc'], ',') === 'abc');
console.log(join(['abc', 'abcdef'], ',') === 'abc,abcdef');
console.log(join(['a', 'bb', 'cccc', 'ddddd'], ',') === 'a,bb,cccc,ddddd');
console.log(join(['a', 'bb', 'cccc', 'ddddd'], '!') === 'a!bb!cccc!ddddd');

console.log('------');

console.log(chunk(''));
console.log(chunk('a'));
console.log(chunk('abc'));
console.log(chunk('abcd'));
console.log(chunk('abcde'));
console.log(chunk('abcdef'));
console.log(chunk('abcdefg'));
console.log(chunk('abcdefgh'));
console.log(chunk('abcdefghi'));

console.log('------');

for(let i = 1;i < 20; i += 1) {
  console.log(addCommas(10 ** i));
}
