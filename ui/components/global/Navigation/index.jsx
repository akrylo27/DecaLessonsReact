import React, { useState } from 'react';
import Link from 'next/link';
import Drops from '../Dropdown';

import styles from '@/ui/components/global/Navigation/Navigation.module.scss';
import Search from '../Search/Search';

export default function Navigation(props) {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const musicLists = show && <Drops />;
  const searchInput = showSearch && <Search />;
  return (
    <>
      <nav className={styles.navMain}>
        <ul className={styles.navMain_list}>
          <li className={styles.navMain_item}>
            <span
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}>
              Music
            </span>
            <div
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}>
              {musicLists}
            </div>
          </li>
          <li className={styles.navMain_item}>
            <span>Top charts</span>
          </li>
          <li className={styles.navMain_item}>
            <span>My playlists</span>
          </li>
          <li className={styles.navMain_item}>
            <span
              className='fa-solid fa-magnifying-glass'
              onClick={() => {
                setShowSearch(!showSearch);
              }}></span>
          </li>
          <li className={styles.navMain_item}>{searchInput}</li>
        </ul>
      </nav>
    </>
  );
}
