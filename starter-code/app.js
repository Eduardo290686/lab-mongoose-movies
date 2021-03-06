require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

mongoose
  .connect('mongodb://localhost/celebritiesApp', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
const celebrity = require('./routes/celebrity');
const newCelebrity = require('./routes/newCelebrity');
const deleteCelebrity = require('./routes/deleteCelebrity');
const editCelebrity = require('./routes/editCelebrity');
const movie = require('./routes/movie');
const newMovie = require('./routes/newMovie');
const deleteMovie = require('./routes/deleteMovie');
const editMovie = require('./routes/editMovie');
app.use('/', index);
app.use('/', celebrity);
app.use('/', newCelebrity);
app.use('/', deleteCelebrity);
app.use('/', editCelebrity);
app.use('/', movie);
app.use('/', newMovie);
app.use('/', deleteMovie);
app.use('/', editMovie);

module.exports = app;
