import Link from 'next/link';
import styles from './Header.module.scss';
import Logo from '@/ui/components/global/Logo';
import Navigation from '../Navigation';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
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
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__box}>
            <Logo />
            <Navigation />
            <nav className='nav-wrapper'>
              {savedJWT ? (
                <>
                  <Link href='/profile'>Профиль </Link>
                  <span
                    className={styles.logout}
                    onClick={() => {
                      handleClickLogOut();
                    }}>
                    Выход
                  </span>
                </>
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
