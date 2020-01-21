// For what inputs (n) does this function take the most steps?
// For what inputs (n) does this function take the fewest steps?
// Is the first (d) we find that divides (n) always prime? Why or why not?
// Is it doing any duplicate / redundant work?
// How big can the smallest prime factor be, if one exists?

function isPrimeAll(n) {
  for (let d = 2; d < n; d += 1) {
    if (n % d === 0) {
      return d;
    }
  }

  return true;
}


function isPrimeOdds(n) {
  if (n === 2) {
    return true;
  }

  if (n % 2 === 0){
    return false;
  }

  for (let d = 3; d < n; d += 2) {
    if (n % d === 0) {
      return false;
    }
  }

  return true;
}

function factors(n) {
  let results = [];

  for (let d = 2; d < n; d += 1) {
    if (n % d === 0) {
      results.push(d);
    }
  }

  return results;
}

function primeFactors(array) {
  let results = [];

  for(let i = 0; i < array.length; i += 1) {
    if (isPrimeAll(array[i])) {
      results.push(array[i]);
    }
  }

  return results;
}

function timeIsPrimeAll(n) {
  let before = Date.now();

  isPrimeAll(n);

  let after = Date.now();

  return (after - before);
}

function timeIsPrimeOdds(n) {
  let before = Date.now();

  isPrimeOdds(n);

  let after = Date.now();

  return (after - before);
}

let largePrimes = [
  15485863,
  32452843,
  49979687,
  67867967,
  86028121,
  104395301,
  122949823,
  141650939,
  160481183,
  179424673,
  198491317,
  217645177,
  236887691,
  314606869,
  413158511,
  512927357,
  553105243,
  633910099,
  694847533,
  735632791,
  982451653
]

for (let prime of largePrimes) {
  console.log('%d\t%f\t%f', prime, timeIsPrimeAll(prime), timeIsPrimeOdds(prime));
}
