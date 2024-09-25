const Game = require('../models/game');

// Create a new game and save to DB
const createGame = async (req, res) => {
  try {
    const { player1, player2, rounds, winner } = req.body;
    const newGame = new Game({ player1, player2, rounds, winner });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all games from DB
const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createGame, getGames };
