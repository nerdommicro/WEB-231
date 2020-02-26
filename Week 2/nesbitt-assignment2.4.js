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

  FirstName LastName
  Exercise 2.4
  Today's Date

  Hello FirstName LastName!
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
var testDate = dateWriter(2020, 2, 4);
var testFormatNumber = formatNumber(5, 2);
var testConvertInt = convertToInt("15");
var testConvertFloat = convertToFloat("65.55");

//Print the values to the screen

//prints the output to the screen
console.log("\n" + "Name: " + testFullName);
console.log("Date: " + testDate);
console.log("Format of number: " + testFormatNumber);
console.log("Int converted: " + testConvertInt);
console.log("Float converted: " + testConvertFloat);



