function makeStuffHappen(num) {
  console.log('1. Making stuff happen, hopefully!');
  console.log('2. Before, the value of num is:', num);

  for (let i = 0; i < num; i += 1) {
    console.log('3. The value of i is:', i);
    console.log('4. For looooop!');
  }

  console.log('5. After the for loop, we are down here.');
  console.log('6. Afterwards, the value of i is:', i);
  console.log('7. And the value of num is:', num);

  return num + 20;
}

let waffles = 17;

console.log('8. Is this the real life?');
console.log('9. Before, the value of waffles is:', waffles);

waffles = makeStuffHappen(2);

console.log('10. Is this just fantasy?');
console.log('11. The value of waffles is:', waffles);

waffles = makeStuffHappen(4);

console.log('12. Caught in a landslide.');
console.log('13. Finally, the value of waffles is:', waffles);
