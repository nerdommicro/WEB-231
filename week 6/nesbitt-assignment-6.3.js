/*
======================================================
; Title:  nesbitt-assignment6.3.js
; Author: Professor Krasso
; Date:   21 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates objects
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 6.3"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise 6.3
  3/21/2020

  {id: 101, name: Help Desk Support, requestor: Bob Jones}
  */

 var ticket = {
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones"
}

console.log("id: " + ticket.id + ", name: " + ticket.name + ", requestor: " + ticket.requestor);

