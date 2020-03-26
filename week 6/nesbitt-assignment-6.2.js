/*
======================================================
; Title:  nesbitt-assignment6.2.js
; Author: Michelle Nesbitt
; Date:   21 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates try catching errors
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 6.2"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise 5.2
  3/21/2020
  */

  var x = 8;

  try {
    if (x === 8) {
      throw new SyntaxError("Syntax Error by Michelle");
    }
  } catch(err) {
    console.log(err);
  } finally {
    console.log("See above for the error details.");
  }

