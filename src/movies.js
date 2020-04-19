// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
  return moviesArr.map(object => object.key);
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)? 
function NoDupDirectors(moviesArr) {
  const moviesArr.filter(object => object.key >= 2);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  return moviesArr.filter(object => object.director['Steven Spielberg'] && object.genre['Drama']);
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
//get the average
function ratesAverage(moviesArr) {
  return movies.reduce((accumulator, currentValue) => 0 + movieObj.rate);
}
//return ratesAverage / movies.length;


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

