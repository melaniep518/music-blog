const router = require('express').Router();
const Album = require('../models/index').Project;
const Artist = require('../models/index').Artist;

// ********** POST REQUESTS **********
function postNewAlbum(req, res) {
  Artist.findOrCreate({
    where: {
      name: req.body.artistName
    }
  })
  .then(function(artist) {
    Album.findOrCreate({
      where: {
        name: req.body.albumName,
        releaseDate: req.body.releaseDate,
        ArtistId: artist[0].dataValues.id
      }
    })  
  })
  .then(function(album) {
    res.send("You have added a new album")
  })
}

// ********** GET REQUESTS **********
function getAllAlbumsWithArtistInfoAlphabetically(req, res) {
  Album.findAll({
    order: ['name'],
    include: [Artist]
  })
  .then(function(albums) {
    res.send(albums)
  })
}

function getAllAlbumsWithArtistInfoByReleaseDate(req, res) {
  Album.findAll({
    order: ['releaseDate'],
    include: [Artist]
  })
  .then(function(albums) {
    res.send(albums)
  })
}

function getAlbumWithArtistInfoById(req, res) {
  Album.findOne({
    where: {
      id: req.params.id
    },
    include: [Artist]
  })
  .then(function(album) {
    res.send(album)
  })
}

function getAlbumWithArtistInfoByName(req, res) {
  Album.findOne({
    where: {
      name: req.params.name
    },
    include: [Artist]
  })
  .then(function(album) {
    res.send(album)
  })
}

// ********** DELETE REQUESTS **********
function deleteAlbumById(req, res) {
  Album.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.send('Album has been deleted.')
  })
}

function deleteAlbumByName(req, res) {
  Album.destroy({
    where: {
      name: req.body.name
    }
  })
  .then(function() {
    res.send('Album has been deleted.')
  })
}

// ********** PUT REQUESTS **********
function updateAlbumInfoById(req, res) {
  Album.update({
    name: req.body.name,
    releaseDate: req.body.releaseDate
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.send('Album info has been updated.')
  })
}

function updateAlbumInfoByName(req, res) {
  Album.update({
    name: req.body.name,
    releaseDate: req.body.releaseDate
  }, {
    where: {
      name: req.params.name
    }
  })
  .then(function() {
    res.send('Album info has been updated.')
  })
}

// ********** ROUTES **********
router.route('/')
  .post(postNewAlbum)

router.route('/id/:id')
  .delete(deleteAlbumById)

router.route('/update/id/:id')
  .put(updateAlbumInfoById)

router.route('/update/name/:name')
  .put(updateAlbumInfoByName)

router.route('/name')
  .delete(deleteAlbumByName)

router.route('/all/withartists/name')
  .get(getAllAlbumsWithArtistInfoAlphabetically)

router.route('/all/withartists/date')
  .get(getAllAlbumsWithArtistInfoByReleaseDate)

router.route('/one/withartists/id/:id')
  .get(getAlbumWithArtistInfoById)

router.route('/one/withartists/name/:name')
  .get(getAlbumWithArtistInfoByName)



module.exports = router;