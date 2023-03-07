import React from 'react';
import Card from '@/ui/components/global/Navigation/Card/Cards';

function Podcasts(props) {
  const listPodcasts = ['Podcast 1', 'Podcast 2', 'Podcast 3', 'Podcast 4'];
  return (
    <div className='container'>
      <Card headers={'Podcasts'} title={listPodcasts} />
    </div>
  );
}

export default Podcasts;
