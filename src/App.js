import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './main/MainLayout';
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar';
import { colorModeAtom } from './shared/atoms';
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
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <div className="App">
          <ResponsiveAppBar />
          <MainLayout />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
