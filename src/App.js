import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Boutique from './pages/Boutique';
import Contact from './pages/Contact';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Header from './components/Header';
import Footer from './components/Footer';
import Panier from './pages/Panier';
import { PanierProvider } from './context/PanierContext'; 

const App = () => {
  return (
    <BrowserRouter>
      <PanierProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/panier" element={<Panier />} />
          </Routes>
          <Footer />
        </div>
      </PanierProvider>
    </BrowserRouter>
  );
};


export default App;