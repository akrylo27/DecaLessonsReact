import React, { useState } from 'react';
import styles from './UsersPlaylist_item.module.scss';
import Image from 'next/image';

const UserPlaylist_item = ({ image, author, nameplaylist, id }) => {
  const [isPlay, setIsPlay] = useState(true);
  const [isOptions, setIsOptions] = useState(false);

  return (
    <div
      className={styles.playlist_item}
      onMouseOver={() => {
        setIsOptions(true);
      }}
      onMouseLeave={() => {
        setIsOptions(false);
      }}>
      <div className={styles.header}>
        <Image
          className={styles.image}
          src={image}
          width={150}
          height={150}
          alt={nameplaylist}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.subtitle}>
          <span className={styles.author}>Author: {author}</span>
          <p className={styles.nameplaylist}>Playlist: {nameplaylist}</p>
        </div>
        <div
          className={
            isOptions ? `${styles.activeOptions}` : `${styles.options}`
          }>
          <div
            className={`${styles.playerBox__play} ${
              !isPlay ? styles.active : ''
            }`}
            onClick={() => {
              setIsPlay(!isPlay);
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default UserPlaylist_item;
