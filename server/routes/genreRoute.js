const router = require('express').Router();
const Genre = require('../models/index').Genre;

// ********** DELETE requests **********

function deleteGenreById(req, res) {
  Genre.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(genre) {
    console.log('Genre has been deleted.')
    res.send('Genre has been deleted.')
  })
}

function deleteGenreByTitle(req, res) {
  Genre.findOne({
    where: {
      title: req.params.title
    }
  })
  .then(function(genre) {
    Genre.destroy({
      where: {
        id: genre.dataValues.id
      }
    })
  })
  .then(function(genre) {
    console.log('Genre has been deleted.')
    res.send('Genre has been deleted.')
  })
}

// ********** GET requests **********

function getGenreById(req, res) {
  Genre.findById(req.params.id)
  .then(function(genre) {
    res.send(genre)
  })
}

function getAllGenres(req, res) {
  Genre.findAll()
  .then(function(genre) {
    res.send(genre)
  })
}

function getGenreByTitle(req, res) {
  Genre.findOne({
    where: {
      title: req.params.title
    }
  })
  .then(function(genre) {
    res.send(genre)
  })
}

// ********** POST requests **********

function postNewGenre(req, res) {
  Genre.findOrCreate({
    where: {
      title: req.body.genreTitle
    }
  })
  .then(function(genre) {
    console.log('Genre found or created');
    res.send(genre);
  })
}

// ********** PUT requests **********

function putGenreTitleById(req, res) {
  Genre.update({
    title: req.body.genreTitle
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(genre) {
    console.log('Genre title updated.')
    res.send('Genre title updated.')
  })
}

function putGenreTitleByTitle(req, res) {
  Genre.update({
    title: req.body.genreTitle
  }, {
    where: {
      title: req.params.title
    }
  })
  .then(function(genre) {
    console.log('Genre title updated.')
    res.send('Genre title updated.')
  })
}

// ********** ROUTES **********
router.route('/title/:title')
  .get(getGenreByTitle)
  .delete(deleteGenreByTitle)
  .put(putGenreTitleByTitle)

router.route('/id/:id')
  .get(getGenreById)
  .delete(deleteGenreById)
  .put(putGenreTitleById)

router.route('/')
  .post(postNewGenre)
  .get(getAllGenres)

module.exports = router;