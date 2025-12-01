import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import Podcast from './pages/Podcast';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/podcasts' element={<Podcast />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blog />} />
      </Routes>

    </>
  )
}

export default App;
