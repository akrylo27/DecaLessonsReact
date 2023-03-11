import Link from 'next/link';
import { useState } from 'react';

import styles from './AuthBadge.module.scss'

const AuthBadge = () => {
  const [href, setHref] = useState('/signin')

  return (
    <Link href={href} className={styles.authBadge}>
      <div className={styles.authBadge__name}>
        {false ? 'Иван Иванов' : 'Авторизация' }
      </div>
      <div className={styles.authBadge__ava}></div>
    </Link>
  )
}

export default AuthBadge