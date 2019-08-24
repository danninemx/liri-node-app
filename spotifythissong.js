//This file uses the users input query to call the Spotify API and return song data
require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

var song = function () {
    this.getSong = function (userSong) {
        spotify.search({
            type: 'track',
            query: userSong
        })
            .then(response => {
                for (i = 0; i < 4; i++) {
                    console.log("Artist: " + JSON.stringify(response.tracks.items[i].artists[0].name));
                    console.log("Track Name: " + response.tracks.items[i].name);
                    console.log("Album: " + response.tracks.items[i].album.name);
                    console.log("Song Preview: " + response.tracks.items[i].preview_url);
                };
            });
    };
};

module.exports = song;

// //Take in user input and call the Spotify API for song data.
// require("dotenv").config();
// const keys = require("./keys.js");
// const Spotify = require('node-spotify-api');
// const spotify = new Spotify(keys.spotify);

// let song = function () {
//     this.getSong = function (track) {
//         spotify.search({
//             type: 'track',
//             query: track
//         })
//             .then(response => {
//                 for (i = 0; i < 10; i++) {
//                     console.log("Artist: " + JSON.stringify(response.tracks.items[i].artists[0].name));
//                     console.log("Track Name: " + response.tracks.items[i].name);
//                     console.log("Album: " + response.tracks.items[i].album.name);
//                     console.log("Song Preview: " + response.tracks.items[i].preview_url);
//                 };
//             });
//     };
// };

// module.exports = song;