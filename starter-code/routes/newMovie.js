const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')

router.get('/newMovie', (req, res, next) => {
  res.render('newMovie');
})

router.post('/newMovie', (req, res, next) => {
  Movie
    .create({
      'title': req.body.title,
      'genre': req.body.genre,
      'plot': req.body.plot
    })
    .then(newMovie => {
      console.log(newMovie);
      res.redirect('/');
    })
})

module.exports = router
