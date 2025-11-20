import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="f_footer">
      <div style={{ textAlign: 'center', padding: '10px 0' }}>
        <h3>Контакти</h3>
        {/* ВИПРАВЛЕНО: Видалено contentEditable="true" */}
        <p>Адреса: м. Вишгород, вул. Київська, 1</p>
        <p>Телефон: (04596) 22-111</p>
        
        {/* Внутрішні посилання через Link */}
        <div style={{ margin: '10px 0' }}>
            <Link to="/cabinet" className="a_link" style={{ marginRight: '15px' }}>Перейти у власний кабінет</Link>
            <Link to="/register" className="a_link">Зареєструватись</Link>
        </div>
        
        {/* ВИПРАВЛЕНО: Видалено contentEditable="true" */}
        <p>&copy; 2025 Вишгородська районна державна адміністрація</p>
      </div>
    </footer>
  );
}

export default Footer;