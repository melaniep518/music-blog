const router = require('express').Router();
const Song = require('../models/index').Song;



// ********** POST new song **********
function postNewSong(req, res) {
	Song.create({
		title: req.body.title,
		artistId: req.body.artistId
	})
	.then(function(song) {
		console.log('REQ BODY:', req.body);
		res.send('You have added a new song')
	})
}

// ********** ROUTES **********
// router.route('/:id')
// 	.get(getSongById)
// 	.delete(deleteSong)

router.route('/')
	// .get(getAllSongs)
	.post(postNewSong)

module.exports = router;