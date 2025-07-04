import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './i18n'; 
import Privacy from './components/Privacy';
import Impressum from './components/Impressum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Career from './components/Career';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;