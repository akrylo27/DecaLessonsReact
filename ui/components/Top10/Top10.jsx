import React, { useState, useEffect } from 'react';

import { first10 } from '@/utils/api/QueryParams';
import { fetchAPI } from '@/utils/api/fetch';
import styles from '@/ui/components/Top10/Top10.module.scss';
import { debounceFunc } from '@/utils/api/debounce';

const Top10 = () => {
  const [audios, setAudios] = useState([]);
  const getTop10 = () => {
    fetchAPI(`/audios?${first10}`, 'get').then(async (response) => {
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
            <li
              className={styles.list_item}
              key={id}
              onClick={() => addTrack(id, attributes)}>
              <strong>{attributes.author}</strong> - {attributes.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Top10;
