const playlist = require('./playlistRoute');
const artist = require('./artistRoute');
const song = require('./songRoute');
const vote = require('./voteRoute');
const comment = require('./commentRoute');
const genre = require('./genreRoute');
const producer = require('./producerRoute');
const album = require('./albumRoute');

module.exports = {
	routes: {
    playlist,
    artist,
    song,
    vote,
    comment,
    genre,
    producer,
    album
  }
}