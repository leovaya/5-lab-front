import React from 'react';

// Компонент, який приймає дані через props (властивості)
function DirectionCard({ title, imgSrc, description, initiatives, links }) {
  return (
    <article className="card" id={title.toLowerCase().replace(/\s/g, '-')}>
      {/* <img> в JSX має бути самозакривним тегом */}
      <img src={imgSrc} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        
        {/* Динамічне створення списку ініціатив через Array.map() */}
        <ul>
          {initiatives.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

        {/* Секція зв'язку з органами влади */}
        <details>
            <summary>Зв'язок з органами влади:</summary>
            <ul>
              {links.map((link, index) => (
                <li key={`link-${index}`}>{link}</li>
              ))}
            </ul>
        </details>

      </div>
    </article>
  );
}

export default DirectionCard;