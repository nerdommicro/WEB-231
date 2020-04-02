/*
======================================================
; Title:  nesbitt-assignment7.2.js
; Author: Professor Krasso
; Date:   31 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates objects
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 7.2"));

/*
  Expected output:

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
  */
 var employee = {
  id: 'Employee ID',
  firstName: 'First Name',
  lastName: 'Last Name',
  title: 'Title'
};

function Employee(id, firstName,lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employee = [
  new Employee('101', 'Thomas', 'Edison', 'Software Engineer'),
  new Employee('102', 'Benjamin', 'Franklin', 'Programmer'),
  new Employee('103', 'Nikola', 'Tesla', 'Project Manager'),
  new Employee('104', 'Charles', 'Babbage', 'Product Manager'),
  new Employee('105', 'Alexander', 'Bell', 'Business Analyst')
];

