import React from 'react';
import styles from '@/ui/components/global/Dropdown/Drop.module.scss';

function Drop({ selectMusic }) {
  return <div className={styles.dropList_item}>{selectMusic}</div>;
}

export default Drop;
