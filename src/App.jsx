import { Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import Layout from './Layout';

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Layout />
      </Suspense>
    </Router>
  );
}

export default App;
