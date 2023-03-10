import React from 'react';

import styles from '@/ui/components/global/404/404.module.scss';

function NotFound(props) {
  return (
    <div>
      <div className={styles.notFoundWrapper}>
        <h1>404 - Страница не найдена</h1>
        <p>Страница не существует или произошла ошибка</p>
        <ul className={styles.linkList}>
          <li className={styles.linkList_item}>
            <a href='http://'>Главная</a>
          </li>
          <li className={styles.linkList_item}>
            <a href='http://'>Музыка</a>
          </li>
          <li className={styles.linkList_item}>
            <a href='http://'>Личный кабинет</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
