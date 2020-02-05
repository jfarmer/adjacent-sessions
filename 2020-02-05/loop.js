// Phase 1
let mul = 4;

while (mul <= 4 * 12) {
  console.log('mul is:', mul);

  mul += 4;
}

// Phase 2
let n = 12;
let mul = 4;

while (mul <= 4 * n) {
  console.log('mul is:', mul);

  mul += 4;
}

// Phase 3
function printMultiplesOfFour(n) {
  let mul = 4;

  while (mul <= 4 * n) {
    console.log('mul is:', mul);

    mul += 4;
  }
}
printMultiplesOfFour(12);



for (let mul = 4; mul <= 4 * n; mul += 4) {
  console.log('mul is:', mul);
}
