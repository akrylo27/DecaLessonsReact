import React, { useState, useEffect } from 'react';

import { first10 } from '@/utils/api/QueryParams';
import { fetchAPI } from '@/utils/api/fetch';
import styles from '@/ui/components/Top10/Top10.module.scss';

const Top10 = () => {
  const [audios, setAudios] = useState([]);

  const getTop10 = () => {
    fetchAPI(`/audios?${first10()}`, 'get').then(async (response) => {
      const { data } = await response.json();
      console.log(data);
      setAudios(data);
    });
  };

  useEffect(() => {
    getTop10();
  }, []);

  return (
    <>
      <div>
        <h2 className={styles.title}>
          Топ 10 <span>d</span>
          less TRACK
        </h2>
      </div>
      <div>
        <ul className={styles.list}>
          {audios.map(({ id, attributes }) => (
            <>
              <div className={styles.list_item} key={id}>
                <div className={styles.number}>{id}</div>

                <div className={styles.list_item_music}>
                  <div className={styles.author}>{attributes.author}</div>
                  <div>{attributes.name}</div>
                </div>
                <div className={styles.options}>
                  <i className='fa-regular fa-heart'></i>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Top10;
