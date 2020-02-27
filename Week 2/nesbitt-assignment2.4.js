/*
======================================================
; Title:  nesbitt-assignment2.4.js
; Author: Michelle Nesbitt
; Date:   25 February 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrations functons
;=====================================================
*/

//Add my header to the program
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 2.4"));
/*
  Expected output:

  Michelle Nesbitt
  Exercise 2.4
  Date: 2/26/2020

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

//Begin program

//function that takes two parameters
//returns the two parameters as one string.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

//function that takes in 3 parameters
//return a new date using the passed values
function dateWriter(year,month,day){
  return new Date(year, month, day);
}


//function that takes in 2 parameters
//return a number with number of fixed positions specified
function formatNumber(number,numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

//function that takes one string parameter
//returns int converted from a string
function convertToInt(strValue) {
  var intResult = parseInt(strValue);
  return intResult;
}

//function that takes one string parameter
//returns float converted from a string
function convertToFloat(strValue) {
  var fltResult = parseFloat(strValue);
  return fltResult;
}



var testFullName = fullName("Michelle", "Nesbitt");
var testDate = dateWriter(2020, 2, 24);
var testFormatNumber = formatNumber(33.6, 2);
var testConvertInt = convertToInt("43");
var testConvertFloat = convertToFloat("6555.55");

//Print the values to the screen

//prints the output to the screen
console.log("Hello my name is " + testFullName + "!");
console.log("Today's date is " + testDate + " and the current temperature is " + testFormatNumber + " degrees.");
console.log("I am " + testConvertInt + " years old and my savings account goal is " + testConvertFloat + " dollars.");



