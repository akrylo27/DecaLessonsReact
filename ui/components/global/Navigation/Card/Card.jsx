import React, { useState } from 'react';

function Card({ headers, title }) {
  const [isTitle, setIsTexts] = useState(title);

  const musicCard = isTitle.map((title) => {
    return (
      <div className='music-card_item'>
        <p>{title}</p>
      </div>
    );
  });

  return (
    <div className='music-card_wrapper card'>
      <h2>{headers}</h2>
      <div className='music-card_position'>{musicCard}</div>
    </div>
  );
}

export default Card;
