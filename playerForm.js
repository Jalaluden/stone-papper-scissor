import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

const PlayerForm = ({ onStartGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartGame(player1, player2);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Enter Player Names</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <TextField
          label="Player 1 Name"
          variant="outlined"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          required
        />
        <TextField
          label="Player 2 Name"
          variant="outlined"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit" size="large">Start Game</Button>
      </form>
    </Container>
  );
};

export default PlayerForm;
