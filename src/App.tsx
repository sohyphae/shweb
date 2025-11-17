// import AppBar from './components/AppBar';
import About from './components/About';
import Background from './components/Background';
import Contact from './components/Contact';
import Header from './components/Header';
import Live from './components/Live';
import Media from './components/Media';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Work Sans", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <AppBar/> */}
      <Background />
      <Header />
      <About />
      <Media />
      <Live />
      <Contact />
    </ThemeProvider>
  );
}

export default App
