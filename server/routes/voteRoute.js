const router = require('express').Router();
const Vote = require('../models/index').PlaylistVote;

// *************** POST new upvote ***************
// !!! needs to locate playlist by id and update number of upvotes by 1
function postNewUpvote(req, res) {
  Vote.create({
    upvote: +1
  })
  .then(function(vote) {
    console.log('upvote created');
    res.send('upvote created');
  })
}

// *************** ROUTES ***************
// *************** upvotes ***************
router.route('/')
  .post(postNewUpvote);

module.exports = router;