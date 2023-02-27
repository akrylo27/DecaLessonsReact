import Link from 'next/link'

import styles from './Header.module.scss';

import Logo from '@/ui/components/global/Logo'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__box}>
            <Logo />
            <Link href='/signup'>
              Регистрация
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}