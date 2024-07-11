import { AppBar, Box } from '@mui/material';
import { createContext, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Designs from './components/Designs/index.js';
import Category from './components/Category';
import Footer from './components/Footer';
let imageFileURL = "https://drive.google.com/thumbnail?id="
let videoFileURL = "https://drive.google.com/file/d/VIDEO_ID/preview?autoplay=1"

let mainBanner = [imageFileURL + "1nv0fs8cK70qP-bVDOgpyYnVkXOlocZBc", imageFileURL + "1nv0fs8cK70qP-bVDOgpyYnVkXOlocZBc"]

let content = {
  rings: [{
    files: {
      images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
      video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
    },
    description: "abc"
  }, {
    files: {
      images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
      video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
    },
    description: "abc"
  }, {
    files: {
      images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
      video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
    },
    description: "abc"
  }, {
    files: {
      images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
      video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
    },
    description: "abc"
  }, {
    files: {
      images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
      video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
    },
    description: "abc"
  }, {
    files: {
      images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
      video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
    },
    description: "abc"
  }]
}

// Create a Context
const MyContext = createContext();

// Create a custom hook to use the MyContext
export const useMyContext = () => useContext(MyContext);

function App() {

  return (
    <div className="app">
      <AppBar id='header'>
        Rahul verma Designs
      </AppBar>
      <Box className='main'>
        <MyContext.Provider value={{ content, mainBanner }}>
          <Category />
          <Routes>
            <Route exact path='/' element={<Designs />} />
          </Routes>
        </MyContext.Provider>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
