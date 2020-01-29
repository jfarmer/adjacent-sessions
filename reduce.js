function maxBy(array, fn) {
  return array.reduce(function(acc, item) {
    if (fn(item) > fn(acc)) {
      return item;
    } else {
      return acc;
    }
  });
}

let maxByFn = function(fn) {
  return function(x, y) {
    if (fn(x) > fn(y)) {
      return x;
    } else {
      return y;
    }
  }
}

// let res = -Infinity;

// for (let n in array) {
//   res = max(res, n);
// }

// return res;
