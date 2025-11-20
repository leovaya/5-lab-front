import React from 'react';


function DirectionCard({ title, imgSrc, description, initiatives, links }) {
  return (
    <article className="card" id={title.toLowerCase().replace(/\s/g, '-')}>
      <img src={imgSrc} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        
        <ul>
          {initiatives.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

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