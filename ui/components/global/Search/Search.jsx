import React, { useEffect, useState } from 'react';

import Input from '@/ui/components/form/Input';

import { SearchByAuthor } from './SearchQuery';
import { fetchAPI } from '@/utils/api/fetch';
import { debounceFunc } from '@/utils/api/debounce';

import styles from '@/ui/components/global/Search/Search.module.scss';

const Search = () => {
  const [searchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');

  const handleChangeFilter = (e) => {
    e.preventDefault();
    setinputValue(e.target.value);
  };

  const handleClickFilter = (value) => {
    setinputValue(value);
  };

  const getSearch = () => {
    fetchAPI(`audios?${SearchByAuthor(inputValue)}`, 'get').then(
      async (response) => {
        const { data } = await response.json();
        console.log(data);
        setserchAudio(data);
      }
    );
  };

  useEffect(() => {
    try {
      if (inputValue.length > 1) {
        debounceFunc(getSearch, 700);
      } else {
        setserchAudio([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);

  return (
    <div className={styles.search}>
      <button>+</button>
      <div className={styles.search_line}>
        <Input
          type={'text'}
          placeholder={'Трек, Артист...'}
          size={'xg'}
          variant={'dark'}
          value={inputValue}
          onChange={handleChangeFilter}
          id={'search'}
        />
      </div>

      <div className={styles.live}>
        {searchAudio.attributes ? '' : ''}
        {searchAudio.map((audio) => (
          <div className={styles.item} key={audio.id}>
            <div className={styles.author}>
              <Input
                onClick={() => handleClickFilter(`${audio.attributes.author}`)}
                value={`${audio.attributes.author} `}
                type={'text'}
                size={'xg'}
                variant={'dark'}
                cursor={'pointer'}
                readOnly
              />
            </div>
          </div>
        ))}
        {searchAudio.map((audio) => (
          <div className={styles.item} key={audio.id}>
            <div className={styles.author}>
              <Input
                onClick={() =>
                  handleClickFilter(
                    `${audio.attributes.author} - ${audio.attributes.name}`
                  )
                }
                value={`${audio.attributes.author} - ${audio.attributes.name} `}
                type={'text'}
                size={'xg'}
                variant={'dark'}
                cursor={'pointer'}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
