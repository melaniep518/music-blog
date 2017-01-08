const playlist = require('./playlistRoute');
const artist = require('./artistRoute');
const song = require('./songRoute');
const vote = require('./voteRoute');
const genre = require('./genreRoute');
const comment = require('./commentRoute');

module.exports = {
	routes: {
    playlist,
		artist,
		song,
    vote,
    comment,
    genre
	}
}