/*
======================================================
; Title:  nesbitt-assignment4.2.js
; Author: Michelle Nesbitt
; Date:   11 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations xx
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 4.2"));
/*
Expected output:
Michelle Nesbitt
Exercise 4.2
03/11/2020
Apple
Orange
Banana
Mango
Pear
*/
// new line
console.log("\n")
//declare array variables
var myArray = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//function to print the array to the screen
function printFruit(arrayVar) {
  for (var i = 0; i < arrayVar.length; i++){
    console.log(arrayVar[i]);
  }
}
//call the function and pass array
printFruit(myArray);

