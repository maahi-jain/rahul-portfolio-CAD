import './App.css';
import { AppBar, Box } from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <AppBar id='header'>
        Rahul verma Designs
      </AppBar>
      <Box className='main'>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
