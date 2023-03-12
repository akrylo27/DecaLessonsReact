import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"

import styles from './AuthBadge.module.scss'

const AuthBadge = () => {
  const { data: session, status } = useSession()

  console.log('session', session)
  console.log('status', status)

  return (
    <Link href={session ? '/profile' : '/signin'} className={styles.authBadge}>
      <div className={styles.authBadge__name}>
        {session ? session?.user?.username : 'Авторизация' }
      </div>
      <div className={styles.authBadge__ava}></div>
    </Link>
  )
}

export default AuthBadge