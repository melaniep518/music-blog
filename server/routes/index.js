const artist = require('./artistRoute');
const song = require('./songRoute');
const vote = require('./voteRoute');
const comment = require('./commentRoute');

module.exports = {
	routes: {
		artist,
		song,
    vote,
    comment
	}
}