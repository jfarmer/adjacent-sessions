function papaya(meow, bark) {
  let potato;

  if (meow < bark) {
    // console.log('1. We are here.');
    potato = meow;
  } else {
    // console.log('2. beep beep');
    potato = bark;
  }

  return potato;
}

let hello;

hello = papaya(10, 20);
console.log('papaya(10,20) is:         ', hello);

hello = papaya(20, 10);
console.log('papaya(20,10) is:         ', hello);

hello = papaya(1, 0);
console.log('papaya(1,0) is:           ', hello);

hello = papaya(-1, 0);
console.log('papaya(-1,0) is:          ', hello);


hello = papaya(100, 20);
console.log('papaya(100,20) is:        ', hello);

// console.log('');

hello = papaya(20, -20000000);
console.log('papaya(20,-20000000) is: ', hello);
// console.log('');

hello = papaya(1082, 123);
console.log('papaya(1082,123) is:      ', hello);
// console.log('');

hello = papaya(44, 44);
console.log('papaya(44,44) is:         ', hello);
