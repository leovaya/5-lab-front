import React from 'react';
// Пояснення: BrowserRouter, Routes, Route - це інструменти для реалізації SPA
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Імпортуємо повторювані частини
// ВИПРАВЛЕНО: Додано розширення .jsx для коректного імпорту
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Імпортуємо наші сторінки
// ВИПРАВЛЕНО: Додано розширення .jsx для коректного імпорту
import HomePage from './pages/HomePage.jsx';
import DirectionsPage from './pages/DirectionsPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';

function App() {
  return (
    // <Router> дозволяє всьому, що всередині, працювати як SPA
    <Router>
      
      {/* Header і Footer відображаються на кожній сторінці */}
      <Header />

      {/* <Routes> перемикає вміст сторінки залежно від URL */}
      <Routes>
        
        {/* Route для Головної сторінки (шлях "/") */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route для сторінки Напрямків */}
        <Route path="/napryamy" element={<DirectionsPage />} />
        
        {/* Route для сторінки Зворотного зв'язку */}
        <Route path="/feedback" element={<FeedbackPage />} />
        
        {/* Обробка неіснуючих шляхів (404 сторінка) */}
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