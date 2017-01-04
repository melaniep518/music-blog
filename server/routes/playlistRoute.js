const router = require('express').Router();
const Playlist = require('../models/index').Playlist;

// ********** POST new playlist **********
function postNewPlaylist(req, res) {
  Playlist.create({
    title: req.body.title,
    url: req.body.url
  })
  .then(function(playlist) {
    console.log('REQ BODY', req.body);
    res.send(playlist);
  })
}

// ********** ROUTES **********
router.route('/')
  .post(postNewPlaylist)


module.exports = router;