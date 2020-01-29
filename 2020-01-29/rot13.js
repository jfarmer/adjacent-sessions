function rot13(input){
  let sourceAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // let targetAlphabet = 'BCDEFGHIJKLMNOPQRSTUVWXYZA'
  // let targetAlphabet = 'CDEFGHIJKLMNOPQRSTUVWXYZAB'
  let targetAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM'

  let output = '';
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let charIndex = sourceAlphabet.indexOf(char);

    if (charIndex === -1) {
      output += char;
    } else {
      output += targetAlphabet[charIndex];
    }
  }

  return output;
}

let output = rot13('HELLO EVERYONE, HOW ARE YOU?');

console.log(output);
console.log(rot13(output));
