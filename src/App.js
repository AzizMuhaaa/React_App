import React from "react";
import { HashRouter, Route,Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Detail from "./Detail";
import Contact from './Contact'
import "./css/style.css";


function App() {
  return (
    <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie/:id" element={<Detail />} />
      
    </Routes>
  </HashRouter>
  );
}

export default App;