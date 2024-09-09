import { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

import { LanguageContext } from './context/languageContext';
import { UserContext } from './context/userContext';
import { routes } from './routes';
import PrivateRoute from './routing/privateRoute';
import PublicRoute from './routing/publicRoute';

function Layout() {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(UserContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const handleLogin = () => {
    login({ id: 1, name: 'John Doe', email: 'john@example.com' });
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('title')}
          </Typography>
          {user ? (
            <>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                {t('welcome', { name: user.name })}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                {t('logout')}
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              {t('login')}
            </Button>
          )}
          <Button
            color="inherit"
            onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
          >
            {language === 'en' ? 'Español' : 'English'}
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate ? (
                  <PrivateRoute>
                    <route.component />
                  </PrivateRoute>
                ) : (
                  <PublicRoute>
                    <route.component />
                  </PublicRoute>
                )
              }
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}

export default Layout;
