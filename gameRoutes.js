const express = require('express');
const { createGame, getGames } = require('../controllers/gameController');
const router = express.Router();

router.post('/', createGame);
router.get('/', getGames);

module.exports = router;
