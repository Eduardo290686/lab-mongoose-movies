require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose
  .connect('mongodb://localhost/celebritiesApp', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const celebrities = [
  {
    name: "Mariano",
    occupation: "Fontanero",
    catchPhrase: "No por mucho madrugar amanece más temprano.",
  },
  {
    name: "Luis",
    occupation: "Sexador de pollos",
    catchPhrase: "Cree el ladrón que todos son de su condición.",
  },
  {
    name: "José",
    occupation: "Trapecista",
    catchPhrase: "Aaaa mi dejadme en paz.",
  }
];

const movies = [
  {
    title: "La trampa",
    genre: "Intriga",
    plot: "Hay unos que caen en una trampa.",
  },
  {
    title: "Tiburón",
    genre: "Acción",
    plot: "Hay un tiburón que se come a to quisqui.",
  },
  {
    title: "Jamón jamón",
    genre: "Erótica",
    plot: "Una guarrerida española.",
  }
];

Celebrity.deleteMany()
  .then(() => {
    return Celebrity.create(celebrities);
  })
  .then(celebritiesCreated => {
    console.log(`${celebritiesCreated.length} forms created with the following id:`);
    console.log(celebritiesCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

Movie.deleteMany()
  .then(() => {
    return Movie.create(movies);
  })
  .then(moviesCreated => {
    console.log(`${moviesCreated.length} forms created with the following id:`);
    console.log(moviesCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
