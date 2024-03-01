'use strict';

let input = prompt('enter something with 5 characters:', 'aaaaa');


let message = '';
if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'perfect!';
} else if(input.length > 5) {
  message = 'too long';
} else {
  message = ':(';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
