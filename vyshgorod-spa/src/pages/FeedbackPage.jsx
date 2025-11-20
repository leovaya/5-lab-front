import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/search.css';
import '../styles/carousel.css';
function FeedbackPage() {
  
  // Стан для відображення підказки 
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });


  // Функція для обробки відправки форми
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Форма відправлена.");
    alert("Дякуємо! Ваше повідомлення відправлено."); 
  };
  
  // Обробка події наведення миші
  const handleMouseOver = (e) => {
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + window.scrollY,
      left: rect.right + 15
    });
    setIsTooltipVisible(true);
  };

  // Обробка події відведення миші 
  const handleMouseOut = () => {
    setIsTooltipVisible(false);
  };


  return (
    <main>
      <h2>Зворотній зв’язок</h2>
      <Link to="/" className="a_link">← На головну сторінку</Link>

      <h3>Форма зворотнього зв’язку</h3>
      <form onSubmit={handleSubmit} className="form-container">
        
        <fieldset className="form-fieldset">
          <legend className="form-legend">Персональна інформація</legend>
          
          <label htmlFor="name" className="form-label">Прізвище та ім’я:</label>
          <input type="text" id="name" name="name" required className="form-input" />
          
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input type="email" id="email" name="email" required className="form-input" />
          
          <label htmlFor="age" className="form-label">Вік:</label>
          <input type="number" id="age" name="age" min="14" max="120" className="form-input" />
          
          <label htmlFor="education" className="form-label">Освіта:</label>
          <select id="education" name="education" className="form-select">
            <option value="повна">Повна</option>
            <option value="неповна">Неповна</option>
            <option value="вища">Вища</option>
            <option value="професійна">Професійна</option>
          </select>
        </fieldset>

        <label htmlFor="purpose" className="form-label">Мета зворотнього зв’язку:</label>
        <select id="purpose" name="purpose" className="form-select">
          <option value="співпраця">Співпраця</option>
          <option value="скарга">Скарга на порушення права власності</option>
          <option value="пропозиція">Пропозиція</option>
          <option value="помилка">Наявність помилки</option>
        </select>

        <label htmlFor="details" className="form-label" >Детально:</label>
        <textarea 
            id="details" 
            name="details" 
            rows="2" 
            maxLength="500" 
            placeholder="Введіть повідомлення (до 500 символів)..." 
            className={`form-textarea ${isTooltipVisible ? 'field-hover' : ''}`} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} 
        ></textarea>

        <div className="form-checkbox">
          <input type="checkbox" id="consent" name="consent" required />
          <label htmlFor="consent">Я погоджуюсь на обробку моїх персональних даних</label>
        </div>

        <div className="form-buttons">
          <button type="submit" className="form-button submit">Відправити</button>
          <button type="reset" className="form-button reset">Очистити</button>
        </div>
      </form>
      
      {isTooltipVisible && (
        <div 
          className="tooltip tooltip-visible" 
          style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px`, position: 'absolute' }}
        >
          Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка
        </div>
      )}
      
    </main>
  );
}

export default FeedbackPage;