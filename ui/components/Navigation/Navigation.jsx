import React from 'react';
import Card from './Card/Card';
import Navbar from './Navbar';

function Navigation(props) {
  const listCategories = ['New', 'Top-charts', 'Home', 'Party Dance'];
  const listGenres = ['Rap', 'Rock', 'Pop', 'Dance & EDM'];
  const listPodcasts = ['Podcast 1', 'Podcast 2', 'Podcast 3', 'Podcast 4'];
  const listBooks = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];

  return (
    <div className='container '>
      <div>
        <Navbar />
      </div>
      <div className='page-main-wrapper'>
        <Card headers={'Categories'} subHeaders={listCategories} />
        <Card headers={'Genres'} subHeaders={listGenres} />
        <Card headers={'Podcasts'} subHeaders={listPodcasts} />
        <Card headers={'Books'} subHeaders={listBooks} />
      </div>
    </div>
  );
}

export default Navigation;
