// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Layout from './Components/Layout';
import ProductPage from './Pages/ProductPage';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<ProductPage/>}/>
         <Route path="/blog" element={<Blog/>}/>
           <Route path="/contact" element={<ContactUs/>}/>
      </Route>
    </Routes>
  );
};

export default App;
