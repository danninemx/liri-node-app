// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// code required to import the keys.js file and store it in a variable.
const keys = require("./keys.js");

// access your keys information like so:
const spotify = new Spotify(keys.spotify);

/*
Make it so liri.js can take in one of the following commands:

   * `concert-this`
   * `spotify-this-song`
   * `movie-this`
   * `do-what-it-says`
*/

// Store command and search term(s).
let command = process.argv[2];
let termsArr = process.argv.slice(3);
console.log('Search terms are: ' + termsArr);

// 
for (let i = 0; i < termsArr.length; i++) {
    if (i > 0 && i < termsArr.length) {
        // Not the beginning of search term. Adds plus sign.
        movieName = movieName + '+' + termsArr[i];
    } else {
        // Beginning of search term.
        movieName += termsArr[i];
    }
    // console.log(movieName);
}


axios
    .get(queryUrl)
    .then(function (response) {
        // If the axios was successful...
        // Then log the body from the site!
        console.log(response.data.Year);
        // console.log(response.year);
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });

/*
### BONUS

    * In addition to logging the data to your terminal / bash window, output the data to a.txt file called`log.txt`.
* Make sure you append each command you run to the`log.txt` file.
* Do not overwrite your file each time you run a command.

*/
