import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CrowdfundingPlatform from './Pages/CrowdfundingPlateform.jsx';
import ProductPage from './components/ProductPage.jsx'
import LandingPage from './Pages/LandingPage.jsx';
import ResponsiveNav from './components/ResponsiveNav.jsx';
import Launch from './Pages/Launch.jsx'

const App = () => {
  return (
    <Router>
      <ResponsiveNav/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<CrowdfundingPlatform />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/launch" element={<Launch/>} />
      </Routes>
    </Router>
  );
};

// Project Data


export default App;