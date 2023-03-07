import React from 'react';
import Card from '@/ui/components/global/Navigation/Card/Card';

function Categories(props) {
  const listCategories = ['New', 'Top-charts', 'Home', 'Party Dance'];

  return (
    <div className='container'>
      <Card headers={'Categories'} subHeaders={listCategories} />
    </div>
  );
}

export default Categories;
