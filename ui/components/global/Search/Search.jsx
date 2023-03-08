import React, { useEffect, useState } from 'react';
import Input from '../../form/Input';

import { SearchUrl } from './SearchQuery';
import { fetchAPI } from '@/utils/api/fetch';

import styles from '@/ui/components/global/Search/Search.module.scss';
const Search = () => {
  const [searchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');

  useEffect(() => {
    try {
      if (inputValue.length > 1) {
        fetchAPI(`audios?${SearchUrl(inputValue)}`, 'get').then(
          async (response) => {
            const { data } = await response.json();
            setserchAudio(data);
          }
        );

        // console.log(data);
        // setserchAudio(data);
        // fetch(
        //   `${process.env.NEXT_PUBLIC_API_URL}/`,
        //   {
        //     method: 'get',
        //     headers: {
        //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        //     },
        //   }
        // ).then(async (response) => {
        //   const { data } = await response.json();
        //   setserchAudio(data);
        // });
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
    <div className={styles.search}>
      <Input
        type={'text'}
        placeholder={'Трек, Артист...'}
        size={'xg'}
        variant={'dark'}
        value={inputValue}
        onChange={handleChangeFilter}
      />
      <div className={styles.live}>
        {searchAudio.map((audio) => (
          <div className={styles.item} key={audio.id}>
            <Input
              onClick={() =>
                handleClickFilter(
                  `${audio.attributes.author} - ${audio.attributes.name}`
                )
              }
              value={`${audio.attributes.author} - ${audio.attributes.name}`}
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
  );
};

export default Search;
