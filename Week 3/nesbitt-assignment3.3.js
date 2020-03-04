/*
======================================================
; Title:  nesbitt-assignment3.3.js
; Author: Michelle Nesbitt
; Date:   4 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations control statements
;=====================================================
*/
//Add my header to the includes
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 3.3"));
/*
  Expected output:

  Michelle Nesbitt
  Exercise 3.3
  3/4/2020

  // Expected output
  The enter key was pressed
*/

//switch statement replacing the branches of if else statements
let eventKeyCode = 13
var msg = "";

switch (eventKeyCode) {
  case 13:
    msg = 'The enter key was pressed.';
    break;
  case 16:
    msg ='The shift key was pressed.';
    break;
  case 32:
    msg = 'The spacebar key was pressed.';
    break;
  case 8:
    msg ='The backspace / delete key was pressed.';
    break;
  default:
    msg = 'Unrecognized key.';
    break;
}
console.log(msg);
