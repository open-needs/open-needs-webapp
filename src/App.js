import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MainLayout from './main/MainLayout';
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <MainLayout />
    </div>
  );
}

export default App;
