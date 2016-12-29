const artist = require('./artistRoute');
const song = require('./songRoute');

module.exports = {
	routes: {
		artist,
		song
	}
}