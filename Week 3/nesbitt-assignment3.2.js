/*
======================================================
; Title:  nesbitt-assignment3.2.js
; Author: Michelle Nesbitt
; Date:   1 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations control statements
;=====================================================
*/
/*
  Expected output:

  Michelle Nesbitt
  Exercise 3.2
  3/1/2020

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//Add my header to the includes
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 3.2"));


// Create 6 test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Three";
var testVar6 = "Four";

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


//Test out the match functon
console.log(match("D","B"));
console.log(match(6, 6));

//test out the match and logMatch functions
//test out all 6 test variables
if (match(testVar1, testVar2)) {
	logMatch(testVar1, testVar2);
} else {
	logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
	logMatch(testVar3, testVar4);
} else {
	logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
	logMatch(testVar5, testVar6);
} else {
	logMismatch(testVar5, testVar6);
}

//end of program


