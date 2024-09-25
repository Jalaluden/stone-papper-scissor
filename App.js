import React, { useState } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import axios from 'axios';
import PlayerForm from './components/playerForm';
import Game from './components/Game';
import Results from './components/Results';

const App = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const startGame = (p1, p2) => {
    setPlayer1(p1);
    setPlayer2(p2);
    setGameStarted(true);
  };

  const endGame = (rounds, winner) => {
    axios.post('http://localhost:5000/api/games', { player1, player2, rounds, winner })
      .then(response => console.log('Game saved:', response.data))
      .catch(error => console.error('Error saving game data:', error));
    setGameEnded(true);
  };

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" align="center" gutterBottom>
        Rock, Paper, Scissors
      </Typography>
      {!gameStarted ? (
        <PlayerForm onStartGame={startGame} />
      ) : !gameEnded ? (
        <Game player1={player1} player2={player2} onEndGame={endGame} />
      ) : (
        <Results />
      )}
    </Container>
  );
};

export default App;
