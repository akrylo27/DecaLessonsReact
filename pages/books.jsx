import React from 'react';
import Card from '@/ui/components/global/Navigation/Card/Cards';

function Books(props) {
  const listBooks = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];

  return (
    <div className='container'>
      <Card headers={'Books'} title={listBooks} />
    </div>
  );
}

export default Books;
