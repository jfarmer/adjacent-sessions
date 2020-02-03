console.log('About to require');

let exportVal = require('./sayHello.js');

console.log('We exported:', exportVal);

exportVal('Jesse');

console.log('We are in the mothership.');
