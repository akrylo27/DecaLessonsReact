import { signOut } from "next-auth/react"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useRouter } from "next/router"
import { useState } from "react"

export const getServerSideProps = async (context) => {
  const sessionServer = await getServerSession(context.req, context.res, authOptions)

  if (!sessionServer) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionServer
    }
  }
}

const profile = ({ sessionServer }) => {
  const router = useRouter()
  const [user] = useState(sessionServer?.user)

  const handle = async () => {
    const { url } = await signOut({
      redirect: false,
      callbackUrl: "/"
    })

    router.push(url)
  }

  return (
    <div className='container'>
      <button onClick={handle}>Log Out</button>
      <ul>
        <li>
          Имя: {user.name ? user.name : 'Не указано'}
        </li>
        <li>
          Username: {user.username}
        </li>
        <li>
          Email: {user.email}
        </li>
      </ul>
    </div>
  );
};

export default profile;
