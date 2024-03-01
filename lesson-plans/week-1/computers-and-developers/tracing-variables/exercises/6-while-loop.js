'use strict';

let a = 'wow';
// let a = '<>';
// let a = '|-|';
// let a = '';

let b = 'yay';
while (b.length < a.length * 3) {
  b = b + a;
}

console.log(b);
