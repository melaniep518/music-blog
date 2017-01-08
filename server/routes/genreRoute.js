const router = require('express').Router();
const Genre = require('../models/index').Genre;


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

// ********** ROUTES **********
router.route('/')
  .post(postNewGenre)

module.exports = router;