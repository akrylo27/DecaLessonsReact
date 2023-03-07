import React, { useState } from 'react';

function Card({ headers, title }) {
  const [isTitle, setIsTexts] = useState(title);

  const musicCard = isTitle.map((title) => {
    return (
      <div className='music-card-item'>
        <p>{title}</p>
      </div>
    );
  });

  return (
    <div className='music-card-wrapper card'>
      <h2>{headers}</h2>
      <div className='music-card-position'>{musicCard}</div>
    </div>
  );
}

export default Card;
