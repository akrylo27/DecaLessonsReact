import Link from 'next/link';
import styles from './Header.module.scss';
import Logo from '@/ui/components/global/Logo';
<<<<<<< HEAD
import Search from '../Search/Search';
=======
import Navigation from '../Navigation';

import { useEffect, useState } from 'react';
>>>>>>> master

export default function Header() {
  const [savedJWT, setSevedJWT] = useState('');

  useEffect(() => {
    setSevedJWT(JSON.parse(localStorage.getItem('jwt')));
  });
  return (
    <>
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__box}>
            <Logo />
<<<<<<< HEAD
            <Search />
=======
            <Navigation />
>>>>>>> master
            <nav className='nav-wrapper'>
              {savedJWT ? (
                <Link href='/profile'>Профиль</Link>
              ) : (
                <>
                  <Link href='/signin'>Войти </Link>
                  <Link href='/signup'>Регистрация </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
