const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie.hbs', { movie });
    })
})

module.exports = router;
