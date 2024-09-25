import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, List, ListItem } from '@mui/material';
import axios from 'axios';

const Results = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/games')
      .then(response => setGames(response.data))
      .catch(error => console.error('Error fetching game data:', error));
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>All Game Results</Typography>
      {games.map(game => (
        <Paper key={game._id} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6">Game between {game.player1} and {game.player2}</Typography>
          <List>
            {game.rounds.map(round => (
              <ListItem key={round.roundNumber}>
                Round {round.roundNumber}: {round.winner} won
              </ListItem>
            ))}
          </List>
          <Typography variant="body1">Overall Winner: {game.winner}</Typography>
          <Typography variant="caption" color="textSecondary">Date: {new Date(game.date).toLocaleString()}</Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default Results;
