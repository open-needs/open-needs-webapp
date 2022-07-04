import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { AuthProvider } from 'react-auth-kit';
import CssBaseline from '@mui/material/CssBaseline';
import FullWidthAuthWrapper from './main/remote/FullWidthAuthWrapper';
import QueryNeeds from './main/QueryNeeds';
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar';
import Settings from './main/Settings/Settings';
import { SnackbarProvider } from 'notistack';
import { colorModeAtom } from './shared/atoms';
import { prodUrlPrefix } from './shared/constants';
import { useRecoilValue } from 'recoil';

function App() {
  const colorMode = useRecoilValue(colorModeAtom);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode
        }
      }),
    [colorMode]
  );

  return (
    <BrowserRouter basename={prodUrlPrefix}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>
          <SnackbarProvider maxSnack={3}>
            <AuthProvider authType={'localstorage'}>
              <div className="App">
                <ResponsiveAppBar />
                <Routes>
                  <Route path="/Auth" element={<FullWidthAuthWrapper />} />
                  <Route path="/QueryNeeds" element={<QueryNeeds />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/QueryNeeds" replace />} />
                </Routes>
              </div>
            </AuthProvider>
          </SnackbarProvider>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
