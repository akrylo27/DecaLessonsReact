import React, { useEffect, useState } from 'react';

import Input from '@/ui/components/form/Input';

import { SearchByAuthor } from '../../../../utils/api/QueryParams';
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
    <>
      <div className={styles.search}>
        <div className={styles.search_line}>
          <Input
            type={'text'}
            placeholder={'Трек, Артист...'}
            size={'sm'}
            variant={'dark'}
            value={inputValue}
            onChange={handleChangeFilter}
            id={'search'}
          />
        </div>

        <div className={styles.live}>
          {searchAudio.map((audio) => (
            <div className={styles.item} key={audio.id}>
              <div className={styles.author}>
                <Input
                  value={`${audio.attributes.author} - ${audio.attributes.name} `}
                  type={'text'}
                  variant={'dark'}
                  cursor={'pointer'}
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
