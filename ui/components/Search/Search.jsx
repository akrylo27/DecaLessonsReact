import React, { useEffect, useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IconContext } from 'react-icons';

import Input from '../form/Input';

const artistArray = [
  { name: 'Morgenshtern' },
  { name: 'Big Baby Tape' },
  { name: 'Kizaru' },
  { name: 'Martin Garrix' },
  { name: 'Calvin Sparks' },
];

const Search = () => {
  const [artists, setArtist] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setArtist(
          artistArray.filter((i) => {
            return i.name.toLowerCase().match(query);
          })
        );
      } catch (error) {}
    };
    fetchData();
  }, [query]);

  const handleChangeFilter = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <IconContext.Provider value={{ className: 'magnifyingglass' }}>
      <div className='search'>
        <HiMagnifyingGlass />
        <Input
          type={'text'}
          placeholder={'Трек, Артист...'}
          size={'xg'}
          variant={'dark'}
          value={query}
          onChange={handleChangeFilter}
        />
      </div>
      <div>
        {artists.map((artist, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{artist.name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </IconContext.Provider>
  );
};

export default Search;
