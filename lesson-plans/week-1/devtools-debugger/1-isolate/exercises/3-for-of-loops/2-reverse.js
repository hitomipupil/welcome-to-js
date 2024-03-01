'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

// toReverse = abc
// backwards = a + '' = a
// backwards = b + a = ba
//... cba

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

let forwards = '';
for (let nextChar of transformation) {
  forwards = nextChar + forwards;
}

let rightOrder = backwards + ' -> ' + forwards;

// alert(transformation);
alert(rightOrder);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
