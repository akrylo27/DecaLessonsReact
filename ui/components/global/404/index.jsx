import React from 'react';

import styles from '@/ui/components/global/404/404.module.scss';

function NotFound(props) {
  return (
    <div>
      <div className={styles.notFoundWrapper}>
        <h1>404 - Страница не найдена</h1>
        <p>Страница, на которую Вы хотели перейти, не найдена.</p>
        <br />
        <p>Возможно, введён некорректный адрес или страница была удалена.</p>
        <ul className={styles.linkList}>
          <li className={styles.linkList_item}>
            <a href='http://'>Предыдущая страница</a>
          </li>
          <li className={styles.linkList_item}>
            <a href='http://'>Перейти на главную</a>
          </li>
          <li className={styles.linkList_item}>
            <a href='http://'>Служба поддержки</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
