import React, { useEffect, useState } from 'react';

import { SearchByAuthor } from './SearchQuery';
import { fetchAPI } from '@/utils/api/fetch';
import { debounceFunc } from '@/utils/api/debounce';

import styles from '@/ui/components/global/Search/Search.module.scss';
import Search_Item from './Search_Item';

const Search = () => {
  const [searchAudio, setserchAudio] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const [show, setShow] = useState(false);
  const search_Block = show && <Search_block />;

  const handleChangeFilter = (e) => {
    e.preventDefault();
    setinputValue(e.target.value);
  };

  const getSearch = () => {
    fetchAPI(`/audios?${SearchByAuthor(inputValue)}`, 'get').then(
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
      <span
        className='fa-solid fa-magnifying-glass'
        onClick={() => {
          setShow(!show);
        }}></span>
      {search_Block}
    </>
  );

  function Search_block() {
    return (
      <div className={styles.search}>
        <input
          className={styles.search_bar}
          type={'text'}
          placeholder={'Трек, Артист...'}
          value={inputValue}
          onChange={handleChangeFilter}
          id={'search'}
        />
        {!searchAudio.length == 0 ? (
          <Search_Item searchAudio={searchAudio} />
        ) : (
          ''
        )}
      </div>
    );
  }
};

export default Search;
