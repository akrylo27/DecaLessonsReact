import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IconContext } from 'react-icons';

import Input from '../form/Input';

const Search = () => {
  return (
    <IconContext.Provider value={{ className: 'magnifyingglass' }}>
      <div className='search'>
        <HiMagnifyingGlass />
        <Input
          type={'text'}
          placeholder={'Трек, Артист'}
          size={'xg'}
          variant={'dark'}
        />
      </div>
    </IconContext.Provider>
  );
};

export default Search;
