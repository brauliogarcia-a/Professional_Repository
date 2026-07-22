// Required / Imports
const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

// CRUD OPERATIONS
// GET all Pokemon.
router.get('/', (req, res) => {
  Pokemon.find()
    .sort({ id: 1 })
    .then(pokemons => {
      res.status(200).json(pokemons);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Could not get Pokemon list.',
        error: error
      });
    });
});

// GET one Pokemon by its readable id.
router.get('/:id', (req, res) => {
  Pokemon.findOne({ id: req.params.id })
    .then(pokemon => {
      if (!pokemon) {
        return res.status(404).json({ message: 'Pokemon not found.' });
      }

      res.status(200).json(pokemon);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Could not get Pokemon.',
        error: error
      });
    });
});

// CREATE a new Pokemon.
router.post('/', (req, res) => {
  const pokemon = new Pokemon({
    id: req.body.id,
    name: req.body.name,
    type1: req.body.type1,
    type2: req.body.type2,
    level: req.body.level,
    ability: req.body.ability,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    isFavorite: req.body.isFavorite
  });

  pokemon.save()
    .then(savedPokemon => {
      res.status(201).json(savedPokemon);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Could not save Pokemon.',
        error: error
      });
    });
});

// UPDATE an existing Pokemon.
router.put('/:id', (req, res) => {
  Pokemon.findOneAndUpdate(
    { id: req.params.id },
    {
      id: req.body.id,
      name: req.body.name,
      type1: req.body.type1,
      type2: req.body.type2,
      level: req.body.level,
      ability: req.body.ability,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      isFavorite: req.body.isFavorite
    },
    { new: true }
  )
  .then(updatedPokemon => {
    if (!updatedPokemon) {
      return res.status(404).json({ message: 'Pokemon not found.' });
    }

    res.status(200).json(updatedPokemon);
  })
  .catch(error => {
    res.status(500).json({
      message: 'Could not update Pokemon.',
      error: error
    });
  });
});

// DELETE one Pokemon.
router.delete('/:id', (req, res) => {
  Pokemon.findOneAndDelete({ id: req.params.id })
    .then(deletedPokemon => {
      if (!deletedPokemon) {
        return res.status(404).json({ message: 'Pokemon not found.' });
      }

      res.status(200).json({ message: 'Pokemon deleted.' });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Could not delete Pokemon.',
        error: error
      });
    });
});

module.exports = router;
