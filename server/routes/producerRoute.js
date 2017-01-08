const router = require('express').Router();
const Producer = require('../models/index').Producer;


function postNewProducer(req, res) {
  Producer.findOrCreate({
    where: {
      name: req.body.producerName
    }
  })
  .then(function(producer) {
    console.log('Producer found or created.');
    res.send(producer);
  })
}

// ********** ROUTES **********
router.route('/')
  .post(postNewProducer)

module.exports = router;