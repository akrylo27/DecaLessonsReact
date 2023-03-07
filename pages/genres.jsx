import React from 'react';
import Card from '@/ui/components/global/Navigation/Card/Cards';

function Genres(props) {
  const listGenres = ['Rap', 'Rock', 'Pop', 'Dance & EDM'];

  return (
    <div className='container'>
      <Card headers={'Genres'} title={listGenres} />
    </div>
  );
}

export default Genres;
