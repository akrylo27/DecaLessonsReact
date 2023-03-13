import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

import styles from './AuthBadge.module.scss'

const AuthBadge = () => {
  const { data: session, status, data } = useSession()

  console.log('session', session)
  console.log('status', status)
  console.log('jwt', data)

  return (
    <Link href={session ? '/profile' : '/signin'} className={styles.authBadge}>
      <div className={styles.authBadge__name}>
        {session ? session?.user?.name ? session?.user?.name : session?.user?.username : 'Авторизация' }
      </div>
      <div className={styles.authBadge__ava}></div>
    </Link>
  )
}

export default AuthBadge