/* jslint node: true */
/* jshint browser: true */
"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Last film?", ""),
      b = prompt("How it was",""),
      c = prompt("Last film?",""),
      d = prompt("How it was","");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
