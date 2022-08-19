console.log("connected");

/////////////////////////
// PIECES OF THE API URL
/////////////////////////
// http://www.omdbapi.com/?apikey=[yourkey]&

// URL  = http://www.omdbapi.com/
// ? = query seacrh parametet
// apikey = identifier
// =  assignment operator
// [yourkey] = the value
// & = what separates our variables in our search

// console.log('http://www.omdbapi.com/?apikey=83ec9128&t=titan')

/////////////////////////
// WAYS TO REQUEST DATA VIA our API AND JS
/////////////////////////
// 1. jQuery's $.ajax()
// 2. the browser fetch
// 3. JS HTTP client called axios - isntalled

// console.log($.ajax('http://www.omdbapi.com/?apikey=83ec9128&t=titan'))

const URL = "http://www.omdbapi.com/?apikey=83ec9128&=titan";

$.ajax(URL).then(
  function (data) {
    console.log("movie is ready!");
    console.log(data);
  },
  function (error) {
      console.log( "we broke it!" )
      console.log(error);
  }
);
