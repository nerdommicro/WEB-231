/*
======================================================
; Title:  nesbitt-assignment5.3.js
; Author: Michelle Nesbitt
; Date:   14 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates arrays
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 5.3"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise 5.3
  3/14/2020

    -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/
console.log("");

var musicians =[
  {
      firstName: "Ludwig Van",
      lastName: "Beethoven",
      genre: "Classical",
      rating: 8
  },
  {
      firstName: "Wolfgang Amadeus",
      lastName: "Mozart",
      genre: "Classical",
      rating: 10
  },
  {
      firstName: "Johann Sebastian",
      lastName: "Bach",
      genre: "Classical",
      rating: 9
  },
  {
      firstName: "Joseph",
      lastName: "Haydn",
      genre: "Classical",
      rating: 6
  },
  {
      firstName: "Franz",
      lastName: "Schubert",
      genre: "Classical",
      rating: 5
  }

];

musicians.forEach(function(musicians)
{
  console.log(
      "Last Name: " + musicians.lastName + ", Genre: " + musicians.genre + ", Rating: " + musicians.rating
  );
})

