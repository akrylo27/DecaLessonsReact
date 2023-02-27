import styles from './Header.module.scss';

import Logo from '@/ui/components/global/Logo'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <Logo />
        </div>
      </header>
    </>
  )
}