import React from 'react';

import Logo from '@/ui/components/global/Logo';
import Navigation from '@/ui/components/global/Navigation';
import AuthBadge from '@/ui/components/global/AuthBadge';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles.headerInfo}>
        <div className='container'>
          Учебный проект стажеров decathlon
        </div>
      </div>

      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__box}>
            <Logo />
            <Navigation />
            <AuthBadge />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header