import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App.jsx';
import { LanguageProvider } from './context/languageContext';
import { UserProvider } from './context/userContext';
import './i18n.config';
import './index.css';

const theme = createTheme({
  // Customize your theme here
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
