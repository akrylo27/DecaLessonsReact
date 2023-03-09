import React from 'react';

import styles from '@/ui/components/global/Dropdown/Drop.module.scss';

function Droplist({ lists }) {
  return (
    <>
      <a>{lists}</a>
    </>
  );
}

export default Droplist;
