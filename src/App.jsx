import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CrowdfundingPlatform from './Pages/CrowdfundingPlateform.jsx';
import ProductPage from './components/ProductPage.jsx'
import LandingPage from './Pages/LandingPage.jsx';
import ResponsiveNav from './components/ResponsiveNav.jsx';
import Launch from './Pages/Launch.jsx'
import HelpPage from './Pages/HelpPage';
import Dashboard from './Pages/Dashboard.jsx';

const App = () => {
  return (
    <Router>
      <ResponsiveNav/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<CrowdfundingPlatform />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/launch" element={<Launch/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/help' element={<HelpPage/>} />
      </Routes>
    </Router>
  );
};

// Project Data


export default App;