import React, { useState } from 'react';
import Link from 'next/link';
import Drops from '../Dropdown';

import styles from '@/ui/components/global/Navigation/Navigation.module.scss';

export default function Navigation(props) {
  const [show, setShow] = useState(false);

  const musicLists = show && <Drops />;

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
            <span>Download</span>
          </li>
        </ul>
      </nav>
      <div className={styles.navMain_link}>
        <Link href='/signin'>Войти</Link>
        <Link href='/signup'>Регистрация</Link>
      </div>
    </>
  );
}
