const router = require('express').Router();
const Song = require('../models/index').Song;
const Artist = require('../models/index').Artist;
const Project = require('../models/index').Project;



// ********** POST new song **********
function postNewSong(req, res) {
	Artist.findOrCreate({
		where: {
			name: req.body.artistName
		}
	})
	.then(function(artist) {
		console.log(artist);
		Project.findOrCreate({
			where: {
				name: req.body.projectName,
				releaseDate: req.body.releaseDate,
				ArtistId: artist[0].dataValues.id
			}
		}) 
		.then(function(project) {
			console.log(project);
			console.log(artist);
			Song.findOrCreate({
				where: {
					title: req.body.songTitle,
					ProjectId: project[0].dataValues.id,
					ArtistId: artist[0].dataValues.id
				}
			})
		})
	})
	.then(function(song) {
		res.send('You have added a new song.');
	})
};

// ********** ROUTES **********
// router.route('/:id')
// 	.get(getSongById)
// 	.delete(deleteSong)

router.route('/')
	// .get(getAllSongs)
	.post(postNewSong)

module.exports = router;