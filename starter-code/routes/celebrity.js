const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/celebrity/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render('celebrity', { celebrity });
    })
});

module.exports = router;
