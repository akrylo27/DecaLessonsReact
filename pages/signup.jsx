import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useState } from 'react'
import { fetchAPI } from '@/utils/api/fetch';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';
// import Registration from '@/ui/components/Form/Registration';

export const getServerSideProps = async ({ req, res }) => {
  const sessionServer = await getServerSession(req, res, authOptions)

  if (sessionServer) {
    return {
      redirect: {
        destination: '/profile',
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

export default function SignUp() {
  const router = useRouter()

  const [reg, setReg] = useState({
    username: '',
    email: '',
    password: '',
  })

  const changeUsername = (e) => {
    setReg({ ...reg, username: e.target.value })
  }

  const changeEmail = (e) => {
    setReg({ ...reg, email: e.target.value })
  }

  const changePassword = (e) => {
    setReg({ ...reg, password: e.target.value })
  }

  const addReg = (e) => {
    e.preventDefault()

    fetchAPI(`/auth/local/register`, 'POST', reg).then(async resp => {
      const { url } = await signIn("credentials", {
        identifier: reg.username,
        password: reg.password,
        redirect: false,
        callbackUrl: '/profile'
      })

      router.push(url)

      setReg({
        username: '',
        email: '',
        password: '',
      })
    })
  }

  return (
    <>
      <div className='container'>
        {/* <Registration /> */}
        <form onSubmit={addReg}>
          <p>
            <input type="text" placeholder='username' value={reg.username} onChange={changeUsername} />
          </p>
          <p>
            <input type="email" placeholder='email' value={reg.email} onChange={changeEmail} />
          </p>
          <p>
            <input type="password" placeholder='password' value={reg.password} onChange={changePassword} />
          </p>
          <p>
            <button type='submit'>
              Зарегистрироваться
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
