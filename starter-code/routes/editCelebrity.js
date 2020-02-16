const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js')

router.get('/editCelebrity/:id', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity);
      res.render('editCelebrity', { celebrity });
    })
});

router.post('/editCelebrity/:id', (req, res, next) => {
  Celebrity
    .findByIdAndUpdate(req.params.id, {
      "name": req.body.name,
      "occupation": req.body.occupation,
      "catchPhrase": req.body.phrase
    })
    .then(celebrity => {
      console.log(celebrity);
      res.redirect('/');
    })
});

module.exports = router;
