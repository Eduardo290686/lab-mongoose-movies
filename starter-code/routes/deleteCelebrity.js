const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/deleteCelebrity/:id', (req, res, next) => {
  Celebrity
    .findByIdAndDelete(req.params.id)
    .then(res.redirect('/'));
});

module.exports = router;
