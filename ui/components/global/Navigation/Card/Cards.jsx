import React from 'react';
import Card from './Card';

function Cards({ headers, title }) {
  return (
    <>
      <Card headers={headers} title={title} />
    </>
  );
}

export default Cards;
