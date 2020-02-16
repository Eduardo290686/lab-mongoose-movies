const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/newCelebrity', (req, res, next) => {
  res.render('newCelebrity');
})

router.post('/newCelebrity', (req, res, next) => {
  Celebrity
    .create({
      "name": req.body.name,
      "occupation": req.body.occupation,
      "catchPhrase": req.body.phrase
    })
    .then(newCelebrity => {
      console.log(newCelebrity);
      res.redirect('/');
    })
});

module.exports = router;
