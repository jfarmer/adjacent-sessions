# Session Notes: Loops

## Monday, October 5, 2020

## What Can We Do With Looping / Iteration?

- Doing something repeatedly, over and over
- Remove duplication / repeated code
- Control how much repetition we perform via variables

## While Loops

There are three main types of loops you'll use:

1. `while` loops
1. `for` loops
1. `for...of` loops

**While loops** are the most fundamental type of loop. In fact, every other type of loop can be written using a while loop. We invented `for` and `for...of` loops because we found common patterns when writing `while` loops and wanted to make those patterns easier to write, recognize, and modify.

When you see the `while` keyword, you know a while loop is involved.

1. See [loops.js](loops.js). Save that file and on the command line, run:

   ```console
   node loops.js 8
   ```

   Change `8` to any number and the program will print out that number of lines.

1. See [print-names.js](print-names.js), which implements the same loop using a `while` loop and a `for` loop. Save that file and on the command line, run:

   ```console
   node print-names.js
   ```
