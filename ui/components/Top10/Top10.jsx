import React, { useState, useEffect } from 'react';

import { first10 } from '@/utils/api/QueryParams';
import { fetchAPI } from '@/utils/api/fetch';
import styles from '@/ui/components/Top10/Top10.module.scss';
import Top10_item from './Top10_item/Top10_item';
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
    <div>
      <h2 className={styles.title}>
        Топ 10 <span>d</span>
        less TRACK
      </h2>
      <ul className={styles.list}>
        {audios.map(({ id, attributes }) => (
          <Top10_item key={id} id={id} attributes={attributes} />
        ))}
      </ul>
    </div>
  );
};

export default Top10;
