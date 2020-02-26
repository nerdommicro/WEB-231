/*
======================================================
; Title:  nesbitt-assignment2.3.js
; Author: Michelle Nesbitt
; Date:   25 February 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations functons and properties
;=====================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

*/
//Add my header to the includes
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 2.3"));

//define properties for the program
myName.michelle = "Michelle"

//function that returns my name
function myName() {
  return myName.michelle;
}

//prints the output to the screen
console.log("Hello " + myName() + " Nesbitt")




