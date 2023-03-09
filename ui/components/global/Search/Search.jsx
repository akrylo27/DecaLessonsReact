import React, { useEffect, useState } from 'react';

import Input from '@/ui/components/form/Input';

import { SearchByNameAuthor } from './SearchQuery';
import { fetchAPI } from '@/utils/api/fetch';
import { debounceFunc } from '@/utils/api/debounce';

import styles from '@/ui/components/global/Search/Search.module.scss';

const Search = () => {
  const [searchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');

  const test = (func) => {};

  const getSearch = () => {
    fetchAPI(`audios?${SearchByNameAuthor(inputValue)}`, 'get').then(
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
        debounceFunc(getSearch);
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
      <div onClick={(e) => e.stopPropagation()}>
        <Input
          type={'text'}
          placeholder={'Трек, Артист...'}
          size={'xg'}
          variant={'dark'}
          value={inputValue}
          onChange={handleChangeFilter}
          id={'search'}
        />

        <div className={styles.live}>
          {searchAudio.map((audio) => (
            <div className={styles.item} key={audio.id}>
              <div className={styles.author}>
                <Input
                  onClick={() =>
                    handleClickFilter(`${audio.attributes.author}`)
                  }
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
    </div>
  );
};

export default Search;
