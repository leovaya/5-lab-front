import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Дані для випадаючого меню, що були в dropdown.js
const dropdownItems = [
  { text: 'Економічний розвиток', to: '/napryamy#economic' },
  { text: 'Освіта', to: '/napryamy#education' },
  { text: 'Охорона здоров\'я', to: '/napryamy#health' },
  { text: 'Соціальний захист', to: '/napryamy#social' },
  { text: 'Інфраструктура та ЖКГ', to: '/napryamy#infrastructure' },
  { text: 'Культура і спорт', to: '/napryamy#culture' }
];

function Header() {
  // Стан для мобільного меню (заміна menu.js)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Стан для випадаючого меню (заміна dropdown.js)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Функція для закриття меню після кліку на посилання
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Закриваємо мобільне меню
    setIsDropdownOpen(false); // Закриваємо випадаюче меню
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <img src="/img/gerb.png" alt="Логотип адміністрації" className="header__logo" />
          </Link>
          <h1 className="header__title">
            Вишгородська районна державна адміністрація
          </h1>

          {/* Кнопка "Гамбургер" для мобільного меню */}
          <button className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
            ☰
          </button>

          {/* Додаємо клас 'active' для мобільного меню (логіка з menu.js) */}
          <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`} id="navMenu">
            
            {/* Головна сторінка */}
            <Link to="/" className="header__link" onClick={handleLinkClick}>
              Головна
            </Link>

            {/* Напрями діяльності з випадаючим меню (заміна dropdown.js) */}
            <div 
                className={`dropdown-container ${isDropdownOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <Link 
                    to="/napryamy" 
                    className="header__link" 
                    onClick={(e) => { 
                        // Запобігаємо переходу, щоб відкрити/закрити випадаюче меню на клік
                        e.preventDefault(); 
                        setIsDropdownOpen(!isDropdownOpen);
                        setIsMenuOpen(false); // Закриваємо мобільне меню при відкритті дропдауну
                    }}
                >
                    Напрями діяльності
                </Link>
                
                {/* Вміст випадаючого меню */}
                <div className="dropdown-menu">
                    {dropdownItems.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.to} 
                            className="dropdown-item" 
                            onClick={handleLinkClick} // Закриваємо обидва меню при переході
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Зворотній зв'язок */}
            <Link to="/feedback" className="header__link" onClick={handleLinkClick}>
              Зворотній зв'язок
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;