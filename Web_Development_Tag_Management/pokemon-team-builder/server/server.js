const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const pokemonRoutes = require('./routes/pokemons');

const app = express();
const port = 3000;

// This lets Angular send and receive JSON data from the Node server.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This uses the same cms database, but Pokemon data is stored in its own collection.
mongoose.connect('mongodb://127.0.0.1:27017/cms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log('MongoDB connection error:');
  console.log(err);
});

app.use('/pokemons', pokemonRoutes);

// This only works after running ng build. During class work I use localhost:4200.
app.use(express.static(path.join(__dirname, '../dist/pokemon-team-builder')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/pokemon-team-builder/index.html'));
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
