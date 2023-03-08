import React, { useEffect, useState } from 'react';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import Input from '../form/Input';

const Search = () => {
  const [serchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const token =
    '0690a355926f5ca9ec06ec6ab069eb4df4ff314b45a3106d54658e956482374a3f6df9b1725dcc385c923c551283eb55975fdac143b9910b7f7a33fd3c1ac315d8f2845a8f84010f1ff519a896cee80e03d8173cf96a50eefd0eb4d26a13bb358f9cb18b80139fe0219cb1368dcb5b75d3471a34f85a51b5097a71ab313dc285';
  useEffect(() => {
    try {
      if (inputValue.length > 1) {
        fetch('https://api.dless.ru/api/audios?filters[author][$eq]=J', {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(async (response) => {
          console.log( await response.json() )

          // setserchAudio([]);
          // const { data } = await response.json();
          // let searchQuery = inputValue.toLowerCase();
          // for (const key in data) {
          //   let music = [
          //     data[key].attributes.author.toLowerCase() +
          //       ' - ' +
          //       data[key].attributes.name.toLowerCase(),
          //   ];

          //   for (const key in music) {
          //     if (music[key].match(searchQuery)) {
          //       setserchAudio((prevResult) => {
          //         return [...prevResult, music[key]];
          //       });
          //     }
          //   }
          // }
        });
      } else {
        setserchAudio([]);
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
    setinputValue(value);
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
          value={inputValue}
          onChange={handleChangeFilter}
        />
        <div className='live'>
          {serchAudio.map((name, index) => (
            <div className='item' key={index}>
              <Input
                onClick={() => handleClickFilter(name)}
                value={name}
                type={'text'}
                size={'xg'}
                variant={'dark'}
                cursor={'pointer'}
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Search;
