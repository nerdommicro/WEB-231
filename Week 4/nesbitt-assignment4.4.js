/*
======================================================
; Title:  nesbitt-assignment4.4.js
; Author: Professor Krasso
; Date:   11 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates arrays
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 4.4"));
/*
  Michelle Nesbitt
  Assignment 4.4
  3/11/2020

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/
//declare variables
var myArray = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

//program body
//function
function getState(states, var1) {
  if (states === var1)
	return true
 else
	return false
}

//output the array contents
console.log("-- ORIGINAL ARRAY --");
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("\n");
//print the sorted array
console.log('\n-- SORTED ARRAY --');
myArray.sort().forEach(myArray => console.log(myArray));
console.log("\n");

// output
console.log(" -- SELECTED VALUE --");
console.log(
  myArray.filter
  (
    function (mystate) {
      return getState(mystate, "Iowa")
    }
  )[0]
);
