import './App.css';
import { AppBar, Box } from '@mui/material';
import Footer from './components/Footer';
import Category from './components/Category';

function App() {
  return (
    <div className="app">
      <AppBar id='header'>
        Rahul verma Designs
      </AppBar>
      <Box className='main'>
        <Category />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
