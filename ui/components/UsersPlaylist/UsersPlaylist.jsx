import React from 'react';
import styles from './UsersPlaylist.module.scss';
import UserPlaylist_item from './UserPlaylist_item/UserPlaylist_item';

const playList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150x150',
    nameplaylist: 'Phonk',
    author: 'Danill',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150x150',
    nameplaylist: 'Phonk',
    author: 'Danill',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150x150',
    nameplaylist: 'Phonk',
    author: 'Danill',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150x150',
    nameplaylist: 'Phonk',
    author: 'Danill',
  },
];
const UsersPlaylist = () => {
  return (
    <div>
      <h2 className={styles.title}>
        <span>d</span>
        less USERS PLAYLIST
      </h2>
      <div className={styles.container_wrapper}>
        <div className={styles.container_playlist}>
          {playList.map((audio) => (
            <UserPlaylist_item
              key={audio.id}
              image={audio.image}
              nameplaylist={audio.nameplaylist}
              author={audio.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPlaylist;
