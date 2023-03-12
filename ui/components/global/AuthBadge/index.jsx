import Link from 'next/link';
import { useSession } from "next-auth/react"

import styles from './AuthBadge.module.scss'

const AuthBadge = () => {
  const { data: session } = useSession()

  console.log('111', session)

  return (
    <Link href={session ? '/profile' : '/signin'} className={styles.authBadge}>
      <div className={styles.authBadge__name}>
        {session ? session?.user?.name ? session?.user?.name : session?.user?.username : 'Авторизация' }
      </div>
      <div className={styles.authBadge__ava}>
        {session?.user?.image && <img src={`https://api.dless.ru/${session?.user?.image}`} alt={session?.user?.name} />}
      </div>
    </Link>
  )
}

export default AuthBadge