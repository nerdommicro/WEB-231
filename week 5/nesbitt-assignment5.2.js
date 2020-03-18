/*
======================================================
; Title:  nesbitt-assignment5.2.js
; Author: Michelle Nesbitt
; Date:   11 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates arrays
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 5.2"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise 5.2
  3/14/2020

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/
console.log("");
var stringArray = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];
stringArray.forEach(function(value) {
  console.log(value);
})

