const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js')

router.get('/', (req, res, next) => {
  let celebrities = []
  Celebrity.find()
    .then(celebritiesList => {
      celebrities = celebritiesList;
    })
  Movie.find()
    .then(movies => {
      res.render('index', { celebrities, movies })
    })
});

module.exports = router;
