const router = require('express').Router();
const Artist = require('../models/index').Artist;

// ********** GET an artist by id **********
function getArtistById(req, res) {
	Artist.findById(req.params.id)
		.then(function(artist) {
			res.send(artist)
		})
}

// ********** GET all artists **********
function getAllArtists(req, res) {
	Artist.findAll()
		.then(function(data) {
			res.send(data)
		})
}

// ********** DELETE artist by id **********
function deleteArtist(req, res) {
	Artist.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function(artist) {
		console.log('Artist has been deleted');
		res.send('Artist has been deleted')
	})
}

// ********** POST new artist **********
function postNewArtist(req, res) {
	Artist.create({
		name: req.body.name
	})
	.then(function(artist) {
		console.log('REQ BODY:', req.body);
		res.send('You have added a new artist')
	})
}

// ********** ROUTES **********
router.route('/:id')
	.get(getArtistById)
	.delete(deleteArtist)

router.route('/')
	.get(getAllArtists)
	.post(postNewArtist)

module.exports = router;