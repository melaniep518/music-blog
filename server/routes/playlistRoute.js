const router = require('express').Router();
const Playlist = require('../models/index').Playlist;
const Song = require('../models/index').Song;

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

function deletePlaylistById(req, res) {
  Playlist.destroy({
    where: {
      id: req.params.id
    }
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

function getPlaylistByTitle(req, res) {
  Playlist.findOne({
    where: {
      title: req.params.title
    }
  })
  .then(function(playlist) {
    res.send(playlist);
  });
};

function getPlaylistById(req, res) {
  Playlist.findById(req.params.id)
  .then(function(playlist) {
    res.send(playlist);
  });
};

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

function addSongToPlaylist(req, res) {
  Playlist.findOne({
    where: {
      title: req.body.title
    }
  })
  .then(function(playlist) {
    // console.log(playlist);
    playlist.addSong([req.params.songId])
  })
  .then(function() {
    console.log('Song has been added to playlist.');
    res.send('Song has been added to playlist.');
  })
}

// ********** PUT requests **********
function putPlaylistTitleByTitle(req, res) {
  Playlist.update({
    title: req.body.title
  }, {
    where: {
      title: req.params.title
    }
  })
  .then(function(playlist) {
    console.log('Playlist title updated.');
    res.send('Playlist title updated.')
  })
}

function putPlaylistTitleById(req, res) {
  Playlist.update({
    title: req.body.title
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(playlist) {
    res.send('Playlist title has been updated.')
  })
}

// ********** ROUTES **********
router.route('/')
  .post(postNewPlaylist)
  .get(getAllPlaylists)

router.route('/title/:title')
  .delete(deletePlaylistByTitle)
  .get(getPlaylistByTitle)
  .put(putPlaylistTitleByTitle)
  
router.route('/id/:id')
  .get(getPlaylistById)
  .delete(deletePlaylistById)
  .put(putPlaylistTitleById)

router.route('/song/:songId')
  .post(addSongToPlaylist)
  // .delete(removeSongFromPlaylist)


module.exports = router;