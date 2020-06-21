//            { f(x) for x in [a, b)
// graph(x) = { g(x) for x in [b, c)
//            { h(x) for x in [c, d)

// function makeGraph(...) {
//
// }



function isInRange(range, x) {
  let a = range[0];
  let b = range[1];

  return x >= a && x < b;
}

function makeGraph(pieces) {
  return function(x) {
    for (let piece of pieces) {
      let fn = piece[0];
      let range = piece[1];

      if (isInRange(range, x)) {
        return fn(x);
      }
    }
  }
}

let makeLinearFunction = (m, b) => {
  return x => {
    return m * x + b;
  }
}


// function makeLinearFunction(m, b) {
//   return function(x) {
//     return m * x + b;
//   }
// }

// y = mx + b

let pieces = [
  [makeLinearfunction(1, 0),   [-Infinity, 0]],
  [makeLinearfunction(2, 0),   [0, 4]        ],
  [makeLinearFunction(0.5, 6), [4, Infinity] ],
];

graph = makeGraph(picees);
