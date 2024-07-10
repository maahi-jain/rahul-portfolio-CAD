import './App.css';
import { AppBar, Box } from '@mui/material';
import Footer from './components/Footer';
import Category from './components/Category';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home';
import { createContext, useContext, useState } from 'react';
let imageFileURL = "https://drive.google.com/thumbnail?id="
let videoFileURL = "https://drive.google.com/file/d/VIDEO_ID/preview?autoplay=1"

let mainBanner = [imageFileURL + "1nv0fs8cK70qP-bVDOgpyYnVkXOlocZBc", imageFileURL + "1nv0fs8cK70qP-bVDOgpyYnVkXOlocZBc"]
let content = [{
  category: 'ring',
  files: {
    images: [imageFileURL + "15UjpVzIAifGC8qUGQ6Yo8-Gh-gfhLgrU", imageFileURL + "16T7yI9sUzcjn_L3-NOOXk96i5p1et7OK"],
    video: videoFileURL.replace("VIDEO_ID", "1LVNE1CEg9ziIgJWaSVSz7EcjaE0RwsBw")
  },
  description: "abc"
}];

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
      <MyContext.Provider value={{ content, mainBanner }}>
        <Category />
        <Home />
      </MyContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
