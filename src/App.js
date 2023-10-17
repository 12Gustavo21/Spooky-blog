import React from 'react';

// Routes
import Routes from './assets/services/routes';

//Theme provider
import { ThemeProvider } from 'styled-components';

// Global style
import { GlobalStyle } from './assets/global/style';

//Global state provider
import GlobalStateProvider from './assets/services/store/GlobalStateProvider';

//Theme
import { theme } from './assets/components/theme';

export default function App() {
  return (
    <>
      <GlobalStateProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </GlobalStateProvider>
    </>
  );
}
