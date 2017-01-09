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

// ********** GET artist by name **********
function getArtistByName(req, res) {
	Artist.findOne({
		where: {
			name: req.params.name
		}
	})
	.then(function(artist) {
		res.send(artist);
	})
}


// ********** DELETE artist by id **********
function deleteArtistById(req, res) {
	Artist.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function(artist) {
		res.send('Artist has been deleted.')
	})
}

// ********** DELETE artist by name **********
// SHOULD PROBABLY BE SEPERATED INTO GET AND DELETE REQUESTS???
function deleteArtistByName(req, res) {
	Artist.findOne({
		where: {
			name: req.params.name
		}
	})
	.then(function(artist) {
		console.log('ARTIST', artist.dataValues.id)
		Artist.destroy({
			where: {
				id: artist.dataValues.id
			}
		})
	})
	.then(function(artist) {
		res.send('Artist has been deleted.')
	})
}

// ********** POST new artist **********
function postNewArtist(req, res) {
	Artist.findOrCreate({
		where: {
			name: req.body.artistName	
		}
	})
	.then(function(artist) {
		console.log('REQ BODY:', artist);
		res.send(artist)
	})
}

// ********** PUT artist name **********
function putArtistName(req, res) {
	Artist.update({
		name: req.body.artistName
	},
	{
		where: {
			id: req.params.id
		}
	})
	.then(function(artist) {
		console.log(artist)
		res.send('Artist has been updated.')
	})
}

// ********** ROUTES **********
router.route('/name/:name')
	.delete(deleteArtistByName)
	.get(getArtistByName)
	

router.route('/id/:id')
	.get(getArtistById)
	.delete(deleteArtistById)
	.put(putArtistName)

router.route('/')
	.get(getAllArtists)
	.post(postNewArtist)

module.exports = router;