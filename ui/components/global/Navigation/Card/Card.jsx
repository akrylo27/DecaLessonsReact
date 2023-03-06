import React from 'react';
import Typography from './Typography';

function Card({ headers, subHeaders }) {
  return (
    <section className='card'>
      <h2>{headers}</h2>
      <Typography subHeaders={subHeaders} />
    </section>
  );
}

export default Card;
