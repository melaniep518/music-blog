const router = require('express').Router();
const Comment = require('../models/index').PlaylistComment;

// *************** POST new comment ****************
// !!! attach comment to playlist
function postNewComment(req, res) {
  Comment.create({
    user: req.body.user,
    comment: req.body.comment
  })
  .then(function(val) {
    console.log('COMMENT', req.body);
    res.send('You have added a new comment.')
  })
}


// *************** ROUTES ***************
router.route('/')
  .post(postNewComment)

module.exports = router;