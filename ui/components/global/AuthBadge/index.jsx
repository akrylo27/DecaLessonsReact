import Link from 'next/link'
import Image from 'next/image'
import { useSession } from "next-auth/react"

import styles from './AuthBadge.module.scss'

const AuthBadge = () => {
  const { data: session } = useSession()

  const customLoader = () => {
    return `https://api.dless.ru${session?.user?.image}`
  }

  return (
    <Link href={session ? '/profile' : '/signin'} className={styles.authBadge}>
      <div className={styles.authBadge__name}>
        {session ? session?.user?.name ? session?.user?.name : session?.user?.username : 'Авторизация' }
      </div>
      <div className={styles.authBadge__ava}>
        {session?.user?.image && <Image
          src="profilePic.webp"
          width={34}
          height={34}
          alt="User profile picture"
          quality={80}
          loader={customLoader}
        />}
      </div>
    </Link>
  )
}

export default AuthBadge