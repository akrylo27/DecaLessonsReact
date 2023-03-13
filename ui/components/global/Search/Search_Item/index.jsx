import React from 'react';
import styles from '@/ui/components/global/Search/Search.module.scss';

const Search_Item = ({ searchAudio }) => {
  return (
    <div className={styles.search_live}>
      {searchAudio.map((audio) => (
        <div className={styles.item} key={audio.id}>
          <input
            className={styles.search_bar}
            value={`${audio.attributes.author} - ${audio.attributes.name} `}
            type={'text'}
            cursor={'pointer'}
            readOnly
          />
        </div>
      ))}
    </div>
  );
};

export default Search_Item;
