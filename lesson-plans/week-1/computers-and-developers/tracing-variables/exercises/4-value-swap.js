'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);

/*
t = a;
a = b;
b = t;
*/

a = 'x';
b = 'y';

console.log(a, b, t);

// what did you do in this program? => swapped the value of a and b using another variable t
// what are the final values of `a` and `b`? => a = x, b = y
// how are they changed from the initial values => first assign y (value of a) to t then assign x (value of b) to and finally assign y(value of t ) to b.

// is it possible to swap a and b without using t? => Yes, instead of three assignment expressions, just put 
// a = 'x'
// b = 'y'