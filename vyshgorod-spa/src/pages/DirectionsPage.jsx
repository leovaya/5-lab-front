import React, { useState, useEffect } from 'react'; // Додано useEffect
import DirectionCard from '../components/DirectionCard.jsx';
import { directions } from '../data/directionsData.js';
import { Link } from 'react-router-dom';

// Дані слайдів з napryamy.html
const carouselSlides = [
    { src: "/img/recession.png", caption: "Економічний розвиток" },
    { src: "/img/education.png", caption: "Освіта" },
    { src: "/img/healthcare.png", caption: "Охорона здоров'я" },
    { src: "/img/protection.png", caption: "Соціальний захист" },
    { src: "/img/infrastructure.png", caption: "Інфраструктура та ЖКГ" },
    { src: "/img/cultural-diversity.png", caption: "Культура і спорт" }
];


function DirectionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0); 
  const totalSlides = carouselSlides.length;

  // ============== ЛОГІКА КАРУСЕЛІ ==============
  

  useEffect(() => {
    // Встановлюємо інтервал для зміни слайда 
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => 
        (prevSlide + 1) % totalSlides 
      );
    }, 5000); 

  
    return () => clearInterval(interval);
  }, [totalSlides]); 

  // 2. Обробка переходу на кнопку
  const moveSlide = (direction) => {
      let newSlide = currentSlide + direction;
    
      if (newSlide >= totalSlides) {
          newSlide = 0;
      } else if (newSlide < 0) {
          newSlide = totalSlides - 1;
      }
      setCurrentSlide(newSlide);
  };
  
  // Стиль для зсуву каруселі
  const wrapperStyle = {
      transform: `translateX(${-currentSlide * (100 / totalSlides)}%)`, 
      transition: 'transform 0.5s ease-in-out',
      display: 'flex',
  };

  // ============== ЛОГІКА ПОШУКУ (ЗАМІНА search.js) ==============
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDirections = directions.filter(dir =>
    dir.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dir.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // ==================================================================


  return (
    <main>
      <h2 className="page-title">Напрями діяльності</h2>
      <Link to="/" className="a_link">← На головну сторінку</Link>


      {/* Карусель зображень (з napryamy.html) */}
      <div className="carousel-container">
          <button className="carousel-btn prev" onClick={() => moveSlide(-1)}>‹</button>
          
          <div className="carousel-wrapper" id="carouselWrapper" style={wrapperStyle}>
              {carouselSlides.map((slide, index) => (
                  <div key={index} className="carousel-slide">
                      <img src={slide.src} alt={slide.caption} />
                      <div className="slide-caption">{slide.caption}</div>
                  </div>
              ))}
          </div>
          
          <button className="carousel-btn next" onClick={() => moveSlide(1)}>›</button>
          
          {/* Індикатори каруселі */}
          <div className="carousel-indicators" id="indicators">
              {carouselSlides.map((_, index) => (
                  <div key={index} 
                       className={`indicator ${index === currentSlide ? 'active' : ''}`} 
                       onClick={() => setCurrentSlide(index)}>
                  </div>
              ))}
          </div>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          id="searchInput"
          className="search-input" 
          placeholder="Пошук напряму діяльності..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-btn">
            {/* SVG для кнопки пошуку */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
        </button>
      </div>
      
      {/* Картки напрямків */}
      <div className="direction">
        {filteredDirections.length > 0 ? (
            filteredDirections.map(dir => (
                <DirectionCard
                    key={dir.id}
                    title={dir.title}
                    imgSrc={dir.imgSrc}
                    description={dir.description}
                    initiatives={dir.initiatives}
                    links={dir.links}
                />
            ))
        ) : (
            <div className="search-message error" style={{ margin: '20px auto' }}>
                Нічого не знайдено. Спробуйте інший запит.
            </div>
        )}
      </div>
    </main>
  );
}

export default DirectionsPage;