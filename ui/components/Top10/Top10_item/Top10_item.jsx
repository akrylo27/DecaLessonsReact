import React, { useState } from 'react';
import styles from './Top10_item.module.scss';

const Top10_item = ({ id, attributes }) => {
  const [isPlay, setIsPlay] = useState(true);

  return (
    <div className={styles.list_item}>
      <div className={styles.number}>{id}</div>

      <div className={styles.list_item_music}>
        <div className={styles.author}>{attributes.author}</div>
        <div>{attributes.name}</div>
      </div>
      <div className={styles.options}>
        <div
          className={`${styles.playerBox__play} ${
            !isPlay ? styles.active : ''
          }`}
          onClick={() => {
            setIsPlay(!isPlay);
          }}></div>
        <i className='fa-regular fa-heart'></i>
      </div>
    </div>
  );
};

export default Top10_item;
