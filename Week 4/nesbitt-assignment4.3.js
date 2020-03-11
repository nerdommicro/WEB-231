/*
======================================================
; Title:  nesbitt-assignment4.3.js
; Author: Michelle Nesbitt
; Date:   11 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations arrays
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 4.3"));
/*
  Expected output:

  Michelle Nesbitt
  Exercise 4.3
  3/11/2020

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/
//declare array variables
var myArray = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]

//print the values in the array
function getValue(array1, var1) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] === var1) {
      console.log(array1[i]);
    }
  }
}
//print values to the screen
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// print the values to the screen
console.log("\n"); //new line
console.log(" -- SELECTED VALUE --");
getValue(myArray, "Motorcycle");
console.log("\n"); //new line
console.log(" -- SELECTED VALUE --");
getValue(myArray, "Bus");
