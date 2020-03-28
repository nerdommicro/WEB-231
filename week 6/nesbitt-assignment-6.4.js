/*
======================================================
; Title:  nesbitt-assignment6.4.js
; Author: Professor Krasso
; Date:   21 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates objects
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 6.4"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise 6.4
  3/21/2020

  Ticket 105 was created on 3/21/2020 and assigned to employee Bob Jones (Programmer I).
  */

 var ticket= {
  id: 105,
  name: "Support Team",
  dateCreated: "3/21/2020",
  priority: 1,
  person: {
    id: 9876,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "(Programmer I)",
  }
}
console.log("Ticket "+ ticket.id+ " was created on "+ ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " "
+ ticket.person.lastName + " " + ticket.person.jobTitle + ".")


