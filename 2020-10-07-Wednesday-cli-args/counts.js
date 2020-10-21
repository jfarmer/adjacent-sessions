let words = [
  'apple',
  'banana',
  'apple',
  'potato',
  'banana',
  'pie'
];

let sentence = 'Hello, wOrld! how are you today?'

let counts = {};

for (let item of sanitizedSentence) {
  if (counts[item] !== undefined) {
    // increment count by 1

    counts[item] = counts[item] + 1;
  } else {
    // insert entry into counts where
    // key is item, and
    // value is 1

    counts[item] = 1;
  }
}

console.log(counts);
