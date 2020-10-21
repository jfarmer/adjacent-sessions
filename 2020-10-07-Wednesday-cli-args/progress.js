let process = require('process');

let count = 1;
setInterval(function() {
  let string = '-'.repeat(count);

  count += 1;

  process.stdout.write(string + '\r');
}, 250);
