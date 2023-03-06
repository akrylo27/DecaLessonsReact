import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import Input from '../form/Input';

const Search = () => {
  const [artists, setArtist] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.dless.ru/api/audios`);
        setArtist(data.data);
      } catch (error) {
        console.log(error);
      }
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
        {artists.map((artist) => {
          return (
            <div key={artist.id}>
              <ul>
                <li>{artist.id}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </IconContext.Provider>
  );
};

export default Search;
