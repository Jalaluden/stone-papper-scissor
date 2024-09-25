import React, { useState } from 'react';
import { Button, Typography, Container, Grid, Paper } from '@mui/material';

const Game = ({ player1, player2, onEndGame }) => {
  const [rounds, setRounds] = useState([]);
  const [player1Choice, setPlayer1Choice] = useState('');
  const [player2Choice, setPlayer2Choice] = useState('');
  const [currentRound, setCurrentRound] = useState(1);

  const choices = ['Stone', 'Paper', 'Scissors'];

  const determineWinner = (p1Choice, p2Choice) => {
    if (p1Choice === p2Choice) return 'Tie';
    if ((p1Choice === 'Stone' && p2Choice === 'Scissors') ||
      (p1Choice === 'Scissors' && p2Choice === 'Paper') ||
      (p1Choice === 'Paper' && p2Choice === 'Stone')) {
      return player1;
    }
    return player2;
  };

  const playRound = () => {
    const winner = determineWinner(player1Choice, player2Choice);
    setRounds([...rounds, { roundNumber: currentRound, player1Choice, player2Choice, winner }]);
    if (currentRound === 6) {
      const player1Wins = rounds.filter(round => round.winner === player1).length;
      const player2Wins = rounds.filter(round => round.winner === player2).length;
      const overallWinner = player1Wins > player2Wins ? player1 : player2;
      onEndGame(rounds, overallWinner);
    } else {
      setCurrentRound(currentRound + 1);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Round {currentRound}</Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={6}>
          <Typography variant="h6">{player1}'s turn:</Typography>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            {choices.map(choice => (
              <Button key={choice} variant="outlined" color="primary" onClick={() => setPlayer1Choice(choice)} style={{ margin: '10px' }}>
                {choice}
              </Button>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6">{player2}'s turn:</Typography>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            {choices.map(choice => (
              <Button key={choice} variant="outlined" color="secondary" onClick={() => setPlayer2Choice(choice)} style={{ margin: '10px' }}>
                {choice}
              </Button>
            ))}
          </Paper>
        </Grid>
      </Grid>

      <Button variant="contained" color="success" size="large" onClick={playRound} style={{ marginTop: '20px' }}>Play Round</Button>

      <Typography variant="h5" style={{ marginTop: '40px' }}>Results so far:</Typography>
      {rounds.map(round => (
        <Typography key={round.roundNumber} variant="body1">Round {round.roundNumber}: {round.winner} won</Typography>
      ))}
    </Container>
  );
};

export default Game;
