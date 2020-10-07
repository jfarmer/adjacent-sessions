# Session Notes: cli-args

## Wednesday, October 7, 2020

## Command Line Arguments

See the *Input/Output* section in the crash course for more details on command line arguments: <https://github.com/jfarmer/intro-javascript/tree/master/Input-Output>

Command line arguments are one of three common ways that command line programs receive user input. You've been using command line arguments this whole time.

Look at these commands:

- `cd Desktop/`
  - `cd` is the command
  - `Desktop/` is a command line argument
- `git status`
  - `git` is the command
  - `'status'` is a command line argument
- `git add coolFile.js`
  - `git` is the command
  - `add` is a command line argument
  - `coolFile.js` is a command line argument

### Minimal Example of Command Line Arguments

See [hello.js](hello.js) and run the following:

```console
node hello.js Jimbo
```

### Accessing Command Line Arguments

The operating system (macOS, Windows, etc.) makes the command line arguments available to the program via an array of strings called the "argument vector". Every language exposes this to the programmer in a different way, but there's usually some variable called `argv` or `ARGV` or the like that contains the array of command line arguments.

In JavaScript, this is done via the `process.argv` variable. Here's how you get access to `process.argv`:

```js
let process = require('process');

// We can now reference process.argv, which is an array of
// strings corresponding to the command line arguments.
console.log('The command line arguments are:');
console.log(process.argv);
```

So, `process.argv` is an array that contains everything you typed on the command line. If you ran

```console
node hello.js Waffles
```

then `process.argv` would be a 3-element array. The first element would correspond to `node`, the second element to `hello.js`, and the third would be the literal string `'Waffles'`.

### More Robust Examples

See [add.js](add.js) and run it like so:

```console
node add.js 78 471
```

There are two more files related to `add.js`:

1. [add-no-comments.js](add-no-comments.js), which is a copy of `add.js` with all the comments removed
1. [add-idiomatic](add-idiomatic.js), which is a copy of `add.js` written in a more idiomatic / conventional way

All three do the exact same work.

## Any Operation We Want

Once we have access to the command line arguments, we can choose how to interpret them. In `add.js`, we assumed the first two user-supplied arguments were numbers to be added together.

You could imagine a `multiply.js` that takes two numbers as arguments and multiplies them together.

What if we had a program that did both? We'd have to tell it which operation we want, but it might work like:

```console
node math.js add 82 66
node math.js multiply 9 13
node math.js divide 128 4
```

See [math.js](math.js) for a program that works exactly like this.
