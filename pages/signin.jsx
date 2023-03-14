import Head from 'next/head';
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from 'react';
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useRouter } from 'next/router';
import Link from 'next/link'

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

export default function SignIn() {
  const { data: session } = useSession()
  const [login, setLogin] = useState('')
  const router = useRouter()
  const [passsword, setPassword] = useState('')

  const changeLogin = (e) => {
    setLogin(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const loginIn = async (e) => {
    const { url } = await signIn("credentials", {
      identifier: login,
      password: passsword,
      redirect: false,
      callbackUrl: '/profile'
    })

    setLogin('')
    setPassword('')

    router.push(url)
  }

  useEffect(() => {
    if (session) {
      handle()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <input type="text" placeholder='login' value={login} onChange={changeLogin} />
        <input type="password" placeholder='pass' value={passsword} onChange={changePassword} />
        <button onClick={loginIn}>
          Sign In
        </button>
        
        <div>
          <br />
          <Link href='/signup'>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  )
}
