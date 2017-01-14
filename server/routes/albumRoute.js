const router = require('express').Router();
const Album = require('../models/index').Project;
const Artist = require('../models/index').Artist;

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


// ********** ROUTES **********
router.route('/')
  .post(postNewAlbum)

module.exports = router;