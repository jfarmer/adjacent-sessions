let TAMAGOTCHI_FEELINGS = [
  'dead',
  'sad',
  'neutral',
  'happy',
];

function getFeelingClassFromMood(mood) {
  // TODO: yell if mood is not in right range?
  let feeling = TAMAGOTCHI_FEELINGS[mood];

  return 'feeling-' + feeling;
}

let currentMood = 1;

let tamagotchiElement = document.querySelector('#tamagotchi');

tamagotchiElement.addEventListener('click', function() {
  if (currentMood < TAMAGOTCHI_FEELINGS.length - 1) {
    // TODO: don't let this go past the bounds of the FEELINGS list
    currentMood += 1;

    let oldFeelingClass = getFeelingClassFromMood(currentMood - 1);
    let newFeelingClass = getFeelingClassFromMood(currentMood);

    tamagotchiElement.classList.replace(oldFeelingClass, newFeelingClass);

    console.log('currentMood is:', currentMood);
    console.log('newFeelingClass is:', newFeelingClass);
  }
});

setInterval(function() {
  if (currentMood > 0) {
    currentMood -= 1;

    let oldFeelingClass = getFeelingClassFromMood(currentMood + 1);
    let newFeelingClass = getFeelingClassFromMood(currentMood);

    tamagotchiElement.classList.replace(oldFeelingClass, newFeelingClass);
  }
}, 1000);
