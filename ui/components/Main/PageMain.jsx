import React from 'react';
import Card from './Card/Card';

function PageMain(props) {
  const listCategories = ['New', 'Top-charts', 'Home', 'Party Dance'];
  const listGenres = ['Rap', 'Rock', 'Pop', 'Dance & EDM'];
  const listPodcasts = ['Podcast 1', 'Podcast 2', 'Podcast 3', 'Podcast 4'];
  const listBooks = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];

  return (
    <div className='container page-main-wrapper'>
      <Card subHeaders={listCategories} headers={'Categories'} />
      <Card subHeaders={listGenres} headers={'Genres'} />
      <Card subHeaders={listPodcasts} headers={'Podcasts'} />
      <Card subHeaders={listBooks} headers={'Books'} />
    </div>
  );
}

export default PageMain;
