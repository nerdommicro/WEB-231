/*
======================================================
; Title:  nesbitt-assignment3.4.js
; Author: Michelle Nesbitt
; Date:   4 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations control statements
;=====================================================
*/
//Add my header to the program
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 3.4"));
/*
  Michelle Nesbitt
  Assignment 3.4
  3/4/2020

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/


var test = 5;



/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

function printHeader() {
  console.log("---DO THE NUMBERS MATCH GAME---");
}

//match function compares two arguments returns true if they match
//returns false if they dont match
function match(arg1, arg2) {
 if (arg1 === arg2) {
  return true;
 }
 else {
  return false;
 }
}
//functions to print the results of the match to the screen
function logMismatch(arg1, arg2) {
	console.log(arg1 + " and " + arg2 + " do not match!")
}
//functions to print the results of the match to the screen
function logMatch(arg1, arg2) {
	console.log(arg1 + " and " + arg2 + " do match!");
}


printHeader();

//test out the matching functions using a loop
var i;
for (i = 0; i < 10; i++){
  if (match(test, i))
  {
    logMatch(test, i);
  }
  else
  {
    logMismatch(test, randomNumber(i));
  }
}
