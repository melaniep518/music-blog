const router = require('express').Router();
const Playlist = require('../models/index').Playlist;

// ********** DELETE requests **********
function deletePlaylistByTitle(req, res) {
  Playlist.findOne({
    where: {
      title: req.params.title
    }
  })
  .then(function(playlist) {
    Playlist.destroy({
      where: {
        id: playlist.dataValues.id
      }
    })
  })
  .then(function(playlist) {
    res.send('Playlist has been deleted.')
  })
}

// ********** GET requests **********
function getAllPlaylists(req, res) {
  Playlist.findAll()
  .then(function(playlist) {
    console.log(playlist);
    res.send(playlist);
  })
}

// ********** POST requests **********
function postNewPlaylist(req, res) {
  Playlist.findOrCreate({
    where: {
      title: req.body.title,
      url: req.body.url   
    }
  })
  .then(function(playlist) {
    console.log('REQ BODY', req.body);
    res.send(playlist);
  })
}

// ********** ROUTES **********
router.route('/')
  .post(postNewPlaylist)
  .get(getAllPlaylists)

router.route('/title/:title')
  .delete(deletePlaylistByTitle)
//   .get(getPlaylistByTitle)
//   .put(putPlaylistTitleByTitle)
  

// router.route('/id/:id')
//   .get(getPlaylistById)
//   .delete(deletePlaylistById)
//   .put(putPlaylistNameById)



module.exports = router;