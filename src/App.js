import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navigation from './Navigation';
import Detail from './Detail';

function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/movie_details" element={<Detail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
