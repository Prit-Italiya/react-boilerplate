import React, { useContext } from 'react';

import { Typography, Box, Paper } from '@mui/material';

import { UserContext } from '../../context/userContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.username}!
        </Typography>
        <Typography variant="body1">
          You are logged in. Your user ID is: {user?.id}
        </Typography>
      </Paper>
      <Typography variant="h5" gutterBottom>
        Recent Activity
      </Typography>
      <Typography variant="body1">
        Here you can display recent user activity or any other relevant
        information.
      </Typography>
    </Box>
  );
};

export default Home;
