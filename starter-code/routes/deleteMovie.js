const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/deleteMovie/:id', (req, res, next) => {
  Movie
    .findByIdAndDelete(req.params.id)
    .then(res.redirect('/'));
})

module.exports = router;
