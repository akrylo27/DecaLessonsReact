import React from 'react';
import Card from '@/ui/components/global/Navigation/Card/Card';

function Genres(props) {
  const listGenres = ['Rap', 'Rock', 'Pop', 'Dance & EDM'];

  return (
    <div className='container'>
      <Card headers={'Genres'} subHeaders={listGenres} />
    </div>
  );
}

export default Genres;
