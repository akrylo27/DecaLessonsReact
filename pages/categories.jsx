import React from 'react';
import Card from '@/ui/components/global/Navigation/Card/Cards';

function Categories(props) {
  const listCategories = ['New', 'Top-charts', 'Home', 'Party Dance'];

  return (
    <div className='container'>
      <Card headers={'Categories'} title={listCategories} />
    </div>
  );
}

export default Categories;
