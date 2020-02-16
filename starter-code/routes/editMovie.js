const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')

router.get('/editMovie/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render('editMovie', { movie });
    })
});

router.post('/editMovie/:id', (req, res, next) => {
  Movie
    .findByIdAndUpdate(req.params.id, {
      "title": req.body.title,
      "genre": req.body.genre,
      "plot": req.body.plot
    })
    .then(movie => {
      console.log(movie);
      res.redirect('/');
    })
});

module.exports = router;
