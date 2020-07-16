import { AppContextProvider } from 'services/context';

import Routes from 'routes';
import { GlobalStyles } from 'theme/styles.App';
import { theme } from 'theme/theme';

import MainLayout from 'layouts/main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <MainLayout>
            <Routes />
          </MainLayout>
        </Router>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
