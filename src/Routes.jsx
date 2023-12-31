// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer"
import Home from "./pages/Home";
import About from "./pages/About"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"


const Routing = () => {
  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
