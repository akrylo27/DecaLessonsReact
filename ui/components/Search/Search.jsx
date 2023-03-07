import React, { useEffect, useState } from 'react';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import Input from '../form/Input';

const Search = () => {
  const [artists, setArtist] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const token =
    '8772fc18d6e25c48aebf0274c2e977db022199dc0bde9e3c5e1fc7e9e216df31475ee2277479e194c191db2d0fb3aba2ee2e48d35ea37cdfa1b1d5fb72e415e9ed644b1c1fc676e183858323db98d8729ee0ce2d8dfacf55e7647e130ff9dc7d41e9475a30723f419a0a39f8e51b57ae20dd3086df669204fbe03a2f6209d2e5';
  useEffect(() => {
    try {
      if (inputValue.length > 1) {
        fetch('https://api.dless.ru/api/audios', {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(async (response) => {
          setArtist([]);
          const { data } = await response.json();
          let searchQuery = inputValue.toLowerCase();
          for (const key in data) {
            let author = data[key].attributes.author.toLowerCase();
            if (author.match(searchQuery)) {
              setArtist((prevResult) => {
                return [...prevResult, data[key].attributes.author];
              });
            }
          }
        });
      } else {
        setArtist([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);

  const handleChangeFilter = (e) => {
    e.preventDefault();
    setinputValue(e.target.value);
  };

  const handleClickFilter = (value) => {
    console.log(value);
    setinputValue(value);
  };

  return (
    <IconContext.Provider value={{ className: 'magnifyingglass' }}>
      <div className='search'>
        <div className='search_input'>
          <HiMagnifyingGlass />
          <Input
            type={'text'}
            placeholder={'Трек, Артист...'}
            size={'xg'}
            variant={'dark'}
            value={inputValue}
            onChange={handleChangeFilter}
          />
        </div>
        <div className='live'>
          {artists.map((artists, index) => (
            <Input
              key={index}
              onClick={() => handleClickFilter(artists)}
              value={artists}
              type={'text'}
              size={'xg'}
              variant={'dark'}
              cursor={'pointer'}
              readOnly
            />
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Search;
