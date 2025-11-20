import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


import HomePage from './pages/HomePage.jsx';
import DirectionsPage from './pages/DirectionsPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';

function App() {
  return (
   
    <Router>
      
      <Header />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/napryamy" element={<DirectionsPage />} />
    
        <Route path="/feedback" element={<FeedbackPage />} />
      
        <Route path="*" element={
          <main style={{ padding: '20px', textAlign: 'center' }}>
            <h2>404</h2>
            <p>Сторінку не знайдено. <Link to="/">Перейти на Головну</Link></p>
          </main>
        } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;