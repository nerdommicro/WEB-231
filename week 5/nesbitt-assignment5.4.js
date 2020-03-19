/*
======================================================
; Title:  nesbitt-assignment5.4.js
; Author: Professor Krasso
; Date:   14 March 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates keys
;=====================================================
*/

//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise 5.4"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise 5.3
  3/14/2020

     -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/

console.log("");

var composers =[
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


var ratingsByComposer = composers.map(function(composerRating) {
  return "Rating: " + composerRating.rating + "\n Composer: " + composerRating.lastName ;
})


var genresByComposer = composers.map(function(composerGenre) {
  return "Genre: " + composerGenre.genre + "\nComposer: " + composerGenre.lastName;
})


console.log("-- COMPOSERS BY RATING --")

ratingsByComposer.forEach(function(ratings) {
console.log(ratings);
})

console.log("\n");

console.log("-- COMPOSERS BY GENRE --")

genresByComposer.forEach(function(genres) {
console.log(genres);
})
