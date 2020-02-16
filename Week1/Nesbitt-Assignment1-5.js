/*
============================================
; Title: Assignment 1.5
; Author: Michelle Nesbitt
; Date: 15 February 2020
; Modified By: Michelle Nesbitt
; Description: This program demonstrates the
; use of types, values, and variables.
;===========================================
*/ 
var today1 = new Date();
var firstName1 = "Michelle";
var lastName1 = "Nesbitt";
var address1 = "3794 Miller Pl, Levittown, NY 11756";
var payRate1 = 35.5;
var hireDate1 = today1.toLocaleDateString();

console.log(firstName1 + " " + lastName1 + ", " + address1 + ", " + payRate1.toFixed(1) + ", " + hireDate1);

var today2 = new Date();
var firstName2 = "Michelle";
var lastName2 = "Cohen";
var address2 = "3794 Michelle Pl, Levittown, NY 11756";
var payRate2 = 25.5;
var hireDate2 = today2.toLocaleDateString();

console.log(firstName2 + " " + lastName2 + ", " + address2 + ", " + payRate2.toFixed(1) + ", " + hireDate2);

var today3 = new Date();
var firstName3 = "Michelle";
var lastName3 = "Smith";
var address3 = "3794 Smith Pl, Levittown, NY 11756";
var payRate3 = 15.5;
var hireDate3 = today3.toLocaleDateString();

console.log(firstName3 + " " + lastName3 + ", " + address3 + ", " + payRate3.toFixed(1) + ", " + hireDate3);