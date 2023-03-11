import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '@/ui/components/global/Logo';
import Navigation from '@/ui/components/global/Navigation';
import AuthBadge from '@/ui/components/global/AuthBadge';

import styles from './Header.module.scss';

const Header = () => {
  // Переделаем на cookie
  const [savedJWT, setSevedJWT] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('jwt'))) {
      setSevedJWT(JSON.parse(localStorage.getItem('jwt')));
    } else {
      setSevedJWT('');
    }
  });

  const handleClickLogOut = () => {
    localStorage.removeItem('jwt');
    router.push('/');
  };

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