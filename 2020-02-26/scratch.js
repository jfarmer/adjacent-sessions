function allPositive(array) {
  for (let num of array) {
    if (num <= 0) {
      return false;
    }
  }

  return true;
}

function allNegative(array) {
  for (let num of array) {
    if (num >= 0) {
      return false;
    }
  }

  return true;
}

function allEven(array) {
  for (let num of array) {
    if (num % 2 === 0) {
      return false;
    }
  }

  return true;
}

function all(array, check) {
  for (let num of array) {
    if (check(num)) {
      return false;
    }
  }

  return true;
}

function isEven(num) {
  return num % 2 === 0;
}

function allEven(array) {
  return all(array, isEven);
}

function allPositive(array) {
  return all(array, function(num) {
    return num > 0;
  });
}

function allPositive(array) {
  return all(array, num => num > 0);
}


app.get('/hello', (clientData) => {
 // Do stuff
});

app.get('/hello', function(clientData) {
 // Do stuff

});

function handleGetHello(clientData) {
 // Do stuff
}

app.get('/hello', handleGetHello);


let sum = function(array) {
  let runningTotal = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];

    runningTotal += num;
  }

  return runningTotal;
}

let sum = (array) => {
  let runningTotal = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];

    runningTotal += num;
  }

  return runningTotal;
}

let numbers = [10, 20, 30, 55];
let result = sum(numbers);

console.log(`The sum is ${result}.`);


$('.simon-button.green').on('click', function() {
  console.log('We clicked the green button');
});

$('.simon-button.green').on('click', () => {
  console.log('We clicked the green button');
});


let handleGreenClick = () => {
  console.log('We clicked the green button');
}

$('.simon-button.green').on('click', handleGreenClick);

let result = sum([10, 20, 30, 55]);

let numbers = [10, 20, 30, 55];
let result = sum(numbers);

let bananaTime = {
  name: 'Jesse',
  shout: function() {
    console.log('This HVAC is so loud!');
  }
}

$('.some-button').on('click', bananaTime.shout);
