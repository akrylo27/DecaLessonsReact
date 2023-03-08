import React from 'react';

import styles from '@/ui/components/global/Dropdown/Drop.module.scss';

function Droplist({ lists }) {
  return <div className={styles.dropList_item}>{lists}</div>;
}

export default Droplist;
